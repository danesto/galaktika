import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type FooterProps = {
  items?: {
    label: string;
    href: string;
    skipNewTab?: boolean;
  }[];
  className?: string;
};

const Footer = ({ className, items = [] }: FooterProps) => {
  return (
    <footer className={`${className}`}>
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-1">
          <Link
            href={item.href}
            target={item.skipNewTab ? "_self" : "_blank"}
            rel={item.skipNewTab ? undefined : "noopener"}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && <DividerHorizontalIcon />}
        </div>
      ))}
    </footer>
  );
};

export { Footer };
