import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (!isLoading && !post) {
      navigate("/blog");
    }
  }, [isLoading, post, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-32 glass rounded-full mb-8" />
            <div className="h-12 glass rounded-xl mb-4" />
            <div className="h-6 w-48 glass rounded-xl mb-12" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 glass rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen py-24 px-6">
      <article className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:scale-105 transition-all duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-block text-sm px-4 py-1 rounded-full glass mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="text-muted-foreground mb-12">
            {new Date(post.published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-8 glass p-6 rounded-xl">
              {post.excerpt}
            </p>
          )}

          <div
            className="prose prose-invert max-w-none glass p-8 rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;