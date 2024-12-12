export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author_id: string;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  status: string | null;
  meta_description: string | null;
  tags: string[] | null;
  thumbnail_url: string | null;
}

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface SavedPlan {
  id: string;
  user_id: string;
  title: string;
  content: string;
  service: string;
  created_at: string;
  type: string;
  status: string | null;
  coach_personality: Json | null;
}

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPost;
        Insert: Partial<BlogPost>;
        Update: Partial<BlogPost>;
      };
      profiles: {
        Row: Profile;
        Insert: Partial<Profile>;
        Update: Partial<Profile>;
      };
      saved_plans: {
        Row: SavedPlan;
        Insert: Partial<SavedPlan>;
        Update: Partial<SavedPlan>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}