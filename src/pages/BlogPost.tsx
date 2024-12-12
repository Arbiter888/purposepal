import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();
      
      if (error) throw error;
      
      // Set the correct image based on the blog post type
      let headerImage = '';
      if (data.title.toLowerCase().includes('business coaching')) {
        headerImage = '/lovable-uploads/bb3656a9-8148-42c2-92f8-35f38dd91101.png';
      } else if (data.title.toLowerCase().includes('life coaching')) {
        headerImage = '/lovable-uploads/a5162b73-aec8-4911-baf9-0199ea671edf.png';
      } else if (data.title.toLowerCase().includes('wellness coaching')) {
        headerImage = '/lovable-uploads/03ed54c3-cb6a-4b13-bec5-5ce15450b8d8.png';
      }
      
      return { ...data, headerImage };
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-64 bg-white/10 rounded-lg mb-8"></div>
            <div className="h-8 bg-white/10 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded"></div>
              <div className="h-4 bg-white/10 rounded"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <article className="max-w-4xl mx-auto px-4 text-left">
        <div className="flex justify-end mb-6">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Hero Image */}
          {post.headerImage && (
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <img 
                src={post.headerImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          )}

          {/* Title and Meta */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-aurora leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  •
                  <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-gradient-aurora 
              prose-headings:font-bold
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-p:text-gray-300
              prose-strong:text-white
              prose-img:rounded-xl
              prose-a:text-secondary hover:prose-a:text-secondary-light
              prose-blockquote:border-l-secondary
              prose-blockquote:text-gray-300
              prose-ul:text-gray-300
              prose-li:marker:text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;