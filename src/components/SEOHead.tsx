import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  ogSiteName?: string;
  ogUrl?: string;
  articleAuthor?: string;
  articleSection?: string;
  robots?: string;
  locale?: string;
  alternateLanguages?: { hrefLang: string; href: string }[];
  breadcrumb?: { name: string; url: string }[];
}

export function SEOHead({
  title,
  description,
  keywords = "custom workout plan for beginners, sustainable diet without supplements, affordable fitness coaching, personal trainer online, Expert Trainers, home workout for beginners with no equipment, best workout plan for desk job people",
  canonical,
  ogImage = "https://knoxfit.com/hero-image.webp",
  ogType = "website",
  structuredData,
  twitterCard = "summary_large_image",
  twitterSite = "@KnoxFit",
  twitterCreator = "@KnoxFit",
  ogSiteName = "KN0X-FIT - Expert Fitness Coaching",
  ogUrl,
  articleAuthor,
  articleSection,
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  locale = "en_US",
  alternateLanguages = [],
  breadcrumb = []
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update robots meta
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robots);
    }

    // Update viewport meta
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Add hreflang tags for internationalization
    alternateLanguages.forEach(lang => {
      let link = document.querySelector(`link[hreflang="${lang.hrefLang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang.hrefLang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', lang.href);
    });

    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', title);
    }

    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', description);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }

    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }

    // Update additional Open Graph tags
    const ogSiteNameMeta = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteNameMeta) {
      ogSiteNameMeta.setAttribute('content', ogSiteName);
    }

    const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
    if (ogLocaleMeta) {
      ogLocaleMeta.setAttribute('content', locale);
    }

    if (ogUrl) {
      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) {
        ogUrlMeta.setAttribute('content', ogUrl);
      }
    }

    // Add Open Graph image dimensions for better display
    const ogImageWidthMeta = document.querySelector('meta[property="og:image:width"]');
    if (ogImageWidthMeta) {
      ogImageWidthMeta.setAttribute('content', '1200');
    }

    const ogImageHeightMeta = document.querySelector('meta[property="og:image:height"]');
    if (ogImageHeightMeta) {
      ogImageHeightMeta.setAttribute('content', '630');
    }

    const ogImageAltMeta = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAltMeta) {
      ogImageAltMeta.setAttribute('content', `${title} - Professional fitness coaching and custom workout plans`);
    }

    // Update Twitter meta tags
    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    if (twitterCardMeta) {
      twitterCardMeta.setAttribute('content', twitterCard);
    }

    const twitterSiteMeta = document.querySelector('meta[name="twitter:site"]');
    if (twitterSiteMeta) {
      twitterSiteMeta.setAttribute('content', twitterSite);
    }

    const twitterCreatorMeta = document.querySelector('meta[name="twitter:creator"]');
    if (twitterCreatorMeta) {
      twitterCreatorMeta.setAttribute('content', twitterCreator);
    }

    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute('content', title);
    }

    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionMeta) {
      twitterDescriptionMeta.setAttribute('content', description);
    }

    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageMeta) {
      twitterImageMeta.setAttribute('content', ogImage);
    }

    const twitterImageAltMeta = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAltMeta) {
      twitterImageAltMeta.setAttribute('content', `${title} - Expert fitness coaching and workout plans`);
    }

    // Add article-specific meta tags if provided
    if (articleAuthor) {
      const articleAuthorMeta = document.querySelector('meta[name="author"]');
      if (articleAuthorMeta) {
        articleAuthorMeta.setAttribute('content', articleAuthor);
      }
    }

    if (articleSection) {
      const articleSectionMeta = document.querySelector('meta[property="article:section"]');
      if (articleSectionMeta) {
        articleSectionMeta.setAttribute('content', articleSection);
      }
    }

    // Add structured data if provided
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[data-seo="structured-data"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.setAttribute('data-seo', 'structured-data');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Add breadcrumb structured data
    if (breadcrumb.length > 0) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };

      let breadcrumbScript = document.querySelector('script[data-breadcrumb="structured-data"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-breadcrumb', 'structured-data');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData, twitterCard, twitterSite, twitterCreator, ogSiteName, ogUrl, articleAuthor, articleSection, robots, locale, alternateLanguages, breadcrumb]);

  return null; // This component doesn't render anything
}