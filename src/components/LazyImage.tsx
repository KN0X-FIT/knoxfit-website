import { useEffect, useState } from 'react';

interface LazyImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'fetchPriority'> {
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
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    loading,
    decoding,
    onLoad,
    onError,
    style,
    ...imageProps
  } = props;

  useEffect(() => {
    setImageSrc(src);
    setIsLoaded(false);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-70'
      } ${className}`}
      style={{
        backgroundImage: !isLoaded && placeholder ? `url("${placeholder}")` : undefined,
        ...style,
      }}
      onLoad={(event) => {
        setIsLoaded(true);
        onLoad?.(event);
      }}
      onError={(event) => {
        if (fallbackSrc && imageSrc === src) {
          setImageSrc(fallbackSrc);
          return;
        }
        onError?.(event);
      }}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? 'async'}
      {...imageProps}
    />
  );
}