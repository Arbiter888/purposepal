import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

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
      return data;
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

  // Determine which hero image to use based on the post title/content
  const getHeroImage = () => {
    if (post.title.toLowerCase().includes('business coaching')) {
      return '/lovable-uploads/e4399d5d-0bcf-4a91-9646-8c5a693c8d54.png';
    } else if (post.title.toLowerCase().includes('life coaching')) {
      return '/lovable-uploads/50c2f92e-7a97-460d-a666-14f41af85a60.png';
    } else if (post.title.toLowerCase().includes('wellness coaching')) {
      return '/lovable-uploads/24a164bf-f4e9-4664-85df-51a71d3008d4.png';
    }
    return post.thumbnail_url; // fallback to the post's thumbnail if no match
  };

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <article className="max-w-4xl mx-auto px-4 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Hero Image */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <img 
              src={getHeroImage()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

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