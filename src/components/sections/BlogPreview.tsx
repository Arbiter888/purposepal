import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <section className="section-padding bg-muted">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gradient-sunshine mb-4">Ready to Transform Your Life?</h2>
        <p className="mt-4 text-lg text-muted-foreground mb-12">
          Start reading our blog for expert tips, insights, and guidance on your journey to personal growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
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
                className="bg-zinc-900/50 rounded-xl overflow-hidden hover:bg-zinc-900/70 transition-all duration-300"
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
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                      {post.title}
                    </span>
                  </h3>
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

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/blog"
            className="glass px-8 py-4 rounded-full font-medium hover-lift inline-flex items-center gap-2"
          >
            Read More Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogPreview;