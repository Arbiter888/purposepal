import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Book, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BlogIndex = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["all-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:scale-105 transition-all duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Book className="w-5 h-5 text-gradient-rainbow" />
            <span className="text-gradient-rainbow text-sm font-medium">
              BornPurpose Blog
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Latest Insights & Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our collection of expert articles on personal growth,
            wellness, and success.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="glass p-6 rounded-xl animate-pulse h-[300px]"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="text-sm text-muted-foreground">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogIndex;