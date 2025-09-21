import { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  placeholder?: string;
  priority?: boolean;
}

export function LazyImage({
  src,
  alt,
  className = '',
  fallbackSrc,
  placeholder = 'data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f3f4f6"/%3E%3C/svg%3E',
  priority = false,
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef && !priority && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      observer.observe(imageRef);
    } else if (!priority) {
      // Fallback for browsers without IntersectionObserver
      setImageSrc(src);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  // Create a new props object without fetchPriority to avoid React warnings
  const safeProps = { ...props };
  if ('fetchPriority' in safeProps) {
    delete safeProps.fetchPriority;
  }

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-70'
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={priority ? 'high' : 'low'}
      {...safeProps}
    />
  );
}