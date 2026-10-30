import type { PropsWithChildren } from "react";

interface ImageProps {
  image: {
    src: string;
    alt: string;
  };
}
type HeaderProps = PropsWithChildren<ImageProps>;

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
