"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AnimatedLinkCardProps {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
}

export default function AnimatedLinkCard({
  href,
  imageSrc,
  alt,
  title,
}: AnimatedLinkCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href} className="block">
        <div className="bg-primary-foreground rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
          <Image
            src={imageSrc}
            alt={alt}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold ">{title}</h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
