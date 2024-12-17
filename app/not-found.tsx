import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Image src="/404.svg" width={700} height={400} alt="not-found" />
      <p className="text-xl mb-8 text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button asChild>
        <Link href="/doctor">Return to Home</Link>
      </Button>
    </div>
  );
}
