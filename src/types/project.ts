export interface Project {
  id: string;
  title: string;
  client_name: string | null;
  description: string;
  tech_stack: string[];
  project_url: string | null;
  image_url: string | null;
  sort_order: number;
  created_at: string;
}
