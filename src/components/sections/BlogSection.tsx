import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Book className="w-5 h-5 text-gradient-rainbow" />
            <span className="text-gradient-rainbow text-sm font-medium">
              Latest Insights
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover expert insights on wellness, nutrition, spiritual growth,
            fitness, and financial success.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass p-6 rounded-xl animate-pulse h-[300px]"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass p-6 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs px-3 py-1 rounded-full glass mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:scale-105 transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;