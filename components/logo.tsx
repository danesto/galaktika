import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    // Replace with your own Logo
    <Link href="/" className="text-foreground flex items-center gap-2">
      <Image src="/logo.png" alt="devGalaktika" width="25" height="25" />
      devGalaktika
    </Link>
  );
};

export { Logo };
