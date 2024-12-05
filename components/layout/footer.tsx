import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`${className}`}>
      <Link href="mailto:dane.sto@gmail.com">Email</Link>
      <DividerHorizontalIcon />
      <Link
        href="https://www.linkedin.com/in/danilo-stojanovic-61143a32"
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </Link>
      <DividerHorizontalIcon />
      <Link href="https://github.com/danesto/" target="_blank" rel="noopener">
        GitHub
      </Link>
      <DividerHorizontalIcon />
      <Link href="/DaniloStojanovicCV.pdf" target="_blank" rel="noopener">
        Resume
      </Link>
    </footer>
  );
};

export { Footer };
