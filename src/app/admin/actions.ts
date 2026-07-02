"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/admin/dashboard");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

function parseTechStack(raw: FormData) {
  return String(raw.get("tech_stack") ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return supabase;
}

export async function createProject(formData: FormData) {
  const supabase = await requireUser();

  const { error } = await supabase.from("projects").insert({
    title: String(formData.get("title") ?? ""),
    client_name: String(formData.get("client_name") ?? "") || null,
    description: String(formData.get("description") ?? ""),
    tech_stack: parseTechStack(formData),
    project_url: String(formData.get("project_url") ?? "") || null,
    image_url: String(formData.get("image_url") ?? "") || null,
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await requireUser();

  const { error } = await supabase
    .from("projects")
    .update({
      title: String(formData.get("title") ?? ""),
      client_name: String(formData.get("client_name") ?? "") || null,
      description: String(formData.get("description") ?? ""),
      tech_stack: parseTechStack(formData),
      project_url: String(formData.get("project_url") ?? "") || null,
      image_url: String(formData.get("image_url") ?? "") || null,
      sort_order: Number(formData.get("sort_order") ?? 0) || 0,
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function deleteProject(id: string) {
  const supabase = await requireUser();

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
