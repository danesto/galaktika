"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationProps = {
  items: {
    label: string;
    href: string;
  }[];
};

const Navigation = ({ items }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4">
      {items.map((item) => {
        return (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`font-normal text-lg  ${
                pathname === item.href && "underline"
              } underline-offset-2 hover:underline`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Navigation };
