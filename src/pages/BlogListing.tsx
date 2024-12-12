import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogListing = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gradient-aurora"
          >
            Latest Articles
          </motion.h1>
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="glass p-6 rounded-xl animate-pulse">
                <div className="h-48 bg-white/10 rounded-lg mb-4"></div>
                <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
                <div className="h-20 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>
            ))
          ) : posts?.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="block"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-xl hover-lift cursor-pointer transition-all duration-300 hover:bg-white/5 h-full"
              >
                {post.thumbnail_url && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.thumbnail_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-4 text-gradient-aurora">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <time className="text-xs text-muted-foreground">
                  {new Date(post.published_at).toLocaleDateString()}
                </time>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;