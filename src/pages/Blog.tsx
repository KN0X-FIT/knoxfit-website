import { SEOHead } from '../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Beginner\'s Guide to Home Workouts: Start Your Fitness Journey Today',
    excerpt: 'Learn how to start exercising at home with no equipment. Perfect workout routine for absolute beginners with step-by-step instructions.',
    author: 'KN0X-FIT Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Beginner Fitness',
    image: '/blog-home-workout.jpg',
    slug: 'beginners-guide-home-workouts'
  },
  {
    id: '2', 
    title: 'Weight Loss Without Supplements: Science-Based Approach That Actually Works',
    excerpt: 'Discover how to lose weight sustainably using whole foods and proven strategies. No expensive supplements required.',
    author: 'Dr. Nutrition Expert',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Weight Loss',
    image: '/blog-weight-loss.jpg',
    slug: 'weight-loss-without-supplements'
  },
  {
    id: '3',
    title: 'Building Muscle on a Budget: Affordable Nutrition and Training Tips',
    excerpt: 'Build lean muscle without breaking the bank. Complete guide to budget-friendly muscle building nutrition and workouts.',
    author: 'Fitness Coach',
    date: '2024-01-08',
    readTime: '15 min read',
    category: 'Muscle Building',
    image: '/blog-muscle-building.jpg',
    slug: 'building-muscle-on-budget'
  },
  {
    id: '4',
    title: 'Sustainable Diet Plans: How to Eat Healthy Long-Term Without Feeling Deprived',
    excerpt: 'Learn the secrets to creating diet plans you can stick to for life. No more yo-yo dieting or feeling deprived.',
    author: 'Nutrition Specialist',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Nutrition',
    image: '/blog-sustainable-diet.jpg',
    slug: 'sustainable-diet-plans'
  },
  {
    id: '5',
    title: 'Physical Strength: The Foundation of Health, Confidence, and Life Quality',
    excerpt: 'Discover why physical strength is the cornerstone of optimal health, enhanced confidence, and improved quality of life. Learn science-backed strategies to build strength effectively.',
    author: 'KN0X-FIT Team',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'Fitness Science',
    image: '/blog-physical-strength.jpg',
    slug: 'physical-strength-foundation-health-confidence'
  }
];

export function Blog() {
  return (
    <>
      <SEOHead
        title="KN0X-FIT Blog: Workout Tips, Diet Advice & Fitness Motivation"
        description="Get expert workout tips for beginners, sustainable diet advice without supplements, and fitness motivation. Transform your body with proven strategies from KN0X-FIT Expert Trainers."
        keywords="workout tips for beginners, sustainable diet advice, fitness motivation, body transformation, home workouts, healthy eating, fitness blog, exercise routines"
        canonical="https://knoxfit.com/blog"
        ogImage="https://knoxfit.com/images/blog-cover.jpg"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-knox-black text-white py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Brand Slogan */}
            <div className="text-knox-red font-knockout text-lg tracking-widest uppercase mb-4 animate-pulse">
              BUILT FOR CHANGE - DESIGNED FOR YOU
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
              Fitness <span className="text-knox-red">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert insights, proven strategies, and practical tips to help you achieve your fitness goals. 
              No fluff, just actionable advice from Expert Trainers and nutritionists.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-full" />
                    <div className="absolute top-4 left-4 bg-knox-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold line-clamp-2 hover:text-knox-red transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button 
                      onClick={() => window.location.href = `/blog/${post.slug}`}
                      variant="outline" 
                      className="w-full"
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-knox-black text-white py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Fitness Tips</h2>
            <p className="text-gray-300 mb-8">
              Get weekly fitness tips, workout plans, and nutrition advice delivered to your inbox.
            </p>
            <a 
              href="https://wa.me/919380422603?text=Hi%21%20I%27d%20like%20to%20subscribe%20to%20your%20fitness%20tips%20and%20updates."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center"
            >
              Subscribe for Free Tips
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}