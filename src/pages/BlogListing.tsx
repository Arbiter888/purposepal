import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gradient-aurora"
        >
          Latest Articles
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-zinc-900/50 rounded-xl animate-pulse">
                <div className="h-48 bg-zinc-800 rounded-t-xl"></div>
                <div className="p-6">
                  <div className="h-6 bg-zinc-800 rounded w-3/4 mb-4"></div>
                  <div className="h-20 bg-zinc-800 rounded mb-4"></div>
                  <div className="h-4 bg-zinc-800 rounded w-1/3"></div>
                </div>
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
                className="bg-zinc-900/50 rounded-xl overflow-hidden hover:bg-zinc-900/70 transition-all duration-300 h-full"
              >
                <div className="relative h-48 w-full">
                  {post.thumbnail_url && (
                    <img 
                      src={post.thumbnail_url} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">
                    <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                      {post.title}
                    </span>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.published_at).toLocaleDateString()}
                  </time>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;