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
        <h2 className="text-4xl font-bold text-gradient-sunshine mb-8">Ready to Transform Your Life?</h2>
        <p className="mt-4 text-lg text-muted-foreground mb-12">
          Start reading our blog for expert tips, insights, and guidance on your journey to personal growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
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
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-xl hover-lift cursor-pointer transition-all duration-300 hover:bg-white/5"
              >
                {post.thumbnail_url && (
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={post.thumbnail_url} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4 text-gradient-aurora">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.published_at).toLocaleDateString()}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.a
          href="/blog"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass px-8 py-4 rounded-full font-medium hover-lift inline-flex items-center gap-2"
        >
          Read More Articles
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default BlogPreview;