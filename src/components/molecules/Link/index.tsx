import NextLink from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export const Link = ({ children, href, ...rest }: Props) => {
  return (
    <NextLink href={href} passHref>
      <CustomLink href={href} {...rest}>{children}</CustomLink>
    </NextLink>
  );
};

const CustomLink = ({ children, ...rest }: Props) => {
  return (
   
    <a {...rest} style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
      {children}
    </a>
  );
};
