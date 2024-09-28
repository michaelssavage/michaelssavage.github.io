import type { SerializedStyles } from "@emotion/react";
import { useEffect, useState } from "react";
import { ImageStyle, Placeholder, Wrapper } from "./Picture.styled";

interface Props {
  src: string;
  alt: string;
  style?: SerializedStyles;
  loading?: "lazy" | "eager";
  ar?: string;
}

export const Picture: React.FC<Props> = ({
  src,
  alt,
  style,
  loading = "lazy",
  ar = "3/2",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    if (img.complete) {
      setImageLoaded(true);
      setIsLoading(false);
    } else {
      img.onload = () => {
        setImageLoaded(true);
        setIsLoading(false);
      };
      img.onerror = () => {
        setIsLoading(false);
      };
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <Wrapper css={style}>
      {isLoading && <Placeholder ar={ar} />}
      {imageLoaded && (
        <ImageStyle
          src={src}
          alt={alt}
          loaded={imageLoaded}
          loading={loading}
          ar={ar}
        />
      )}
    </Wrapper>
  );
};