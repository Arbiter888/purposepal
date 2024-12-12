export type Tables = {
  blog_posts: {
    Row: {
      author_id: string
      content: string
      created_at: string | null
      excerpt: string | null
      id: string
      meta_description: string | null
      published_at: string | null
      slug: string
      status: string | null
      tags: string[] | null
      thumbnail_url: string | null
      title: string
      updated_at: string | null
    }
    Insert: {
      author_id: string
      content: string
      created_at?: string | null
      excerpt?: string | null
      id?: string
      meta_description?: string | null
      published_at?: string | null
      slug: string
      status?: string | null
      tags?: string[] | null
      thumbnail_url?: string | null
      title: string
      updated_at?: string | null
    }
    Update: {
      author_id?: string
      content?: string
      created_at?: string | null
      excerpt?: string | null
      id?: string
      meta_description?: string | null
      published_at?: string | null
      slug?: string
      status?: string | null
      tags?: string[] | null
      thumbnail_url?: string | null
      title?: string
      updated_at?: string | null
    }
  }
  profiles: {
    Row: {
      avatar_url: string | null
      created_at: string
      full_name: string | null
      id: string
    }
    Insert: {
      avatar_url?: string | null
      created_at?: string
      full_name?: string | null
      id: string
    }
    Update: {
      avatar_url?: string | null
      created_at?: string
      full_name?: string | null
      id?: string
    }
  }
  saved_plans: {
    Row: {
      coach_personality: Json | null
      content: string
      created_at: string
      id: string
      service: string
      status: string | null
      title: string
      type: string
      user_id: string
    }
    Insert: {
      coach_personality?: Json | null
      content: string
      created_at?: string
      id?: string
      service: string
      status?: string | null
      title: string
      type: string
      user_id: string
    }
    Update: {
      coach_personality?: Json | null
      content?: string
      created_at?: string
      id?: string
      service?: string
      status?: string | null
      title?: string
      type?: string
      user_id?: string
    }
  }
  secrets: {
    Row: {
      id: string
      name: string
      value: string
      created_at: string
    }
    Insert: {
      id?: string
      name: string
      value: string
      created_at?: string
    }
    Update: {
      id?: string
      name?: string
      value?: string
      created_at?: string
    }
  }
}