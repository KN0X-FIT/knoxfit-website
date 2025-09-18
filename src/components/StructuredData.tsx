interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article' | 'breadcrumb';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KN0X-FIT",
          "url": "https://knoxfit.com",
          "logo": "https://knoxfit.com/final_logo-removebg-preview.png",
          "description": "Affordable custom workout plans and sustainable diet guides for beginners. Expert fitness coaching without supplements.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919380422603",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.facebook.com/share/15qEQspHDS/",
            "https://www.instagram.com/kn0x_fit/",
            "https://x.com/KN0X_FIT"
          ],
          ...data
        };
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "KN0X-FIT",
          "url": "https://knoxfit.com",
          "description": "Get affordable custom workout plans for beginners and sustainable diet guides without supplements.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://knoxfit.com/blog?search={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Fitness Coaching",
          "provider": {
            "@type": "Organization",
            "name": "KN0X-FIT"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Fitness Programs",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Diet Plan",
                  "description": "Personalized diet plan for sustainable weight loss without supplements"
                },
                "price": "499",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Workout Plan",
                  "description": "Personalized workout routine for beginners and advanced fitness levels"
                },
                "price": "499",
                "priceCurrency": "INR"
              }
            ]
          },
          ...data
        };
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Person",
            "name": data.author || "KN0X-FIT Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "KN0X-FIT",
            "logo": {
              "@type": "ImageObject",
              "url": "https://knoxfit.com/final_logo-removebg-preview.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "image": data.image,
          ...data
        };
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };
      
      default:
        return data;
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}