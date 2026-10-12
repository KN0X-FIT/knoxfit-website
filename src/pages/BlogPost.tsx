import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-knox-red hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} - KN0X-FIT Blog`}
        description={post.excerpt}
        canonical={`https://knoxfit.com/blog/${slug}`}
      />
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          url: `https://knoxfit.com/blog/${slug}`,
          image: `https://knoxfit.com${post.image}`
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container py-8">
            <Link to="/blog" className="text-knox-red hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-knox-red text-white px-3 py-1 rounded-full font-bold">
                {post.category}
              </span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white rounded-lg shadow-lg p-8"
              dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
            />
            
            {/* CTA Section */}
            <Card className="mt-12 bg-knox-black text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Fitness Journey?</h3>
                <p className="text-gray-300 mb-6">
                  Get personalized workout plans and diet guides designed for your specific goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = "/custom-workout-plan"}
                    className="btn-primary"
                  >
                    Get Custom Workout Plan
                  </Button>
                  <Button 
                    onClick={() => window.location.href = "/diet-guide"}
                    className="btn-outline border-white text-white hover:bg-white hover:text-knox-black"
                  >
                    View Diet Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}