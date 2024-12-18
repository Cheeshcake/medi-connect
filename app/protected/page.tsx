import AnimatedLinkCard from "@/components/animated-link-card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-20">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
        <div className="w-full max-w-7xl flex flex-col gap-3 md:flex-row justify-between items-center p-3 py-5 text-sm">
          <div className="flex gap-1 items-center">
            <Image
              src={"/images/logo.webp"}
              alt="logo"
              width={50}
              height={50}
            />
            <h1 className="text-2xl text-primary font-medium mt-2">
              Welcome to MediConnect!
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <HeaderAuth />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <div className="flex-1 w-full flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className=" text-xl md:text-4xl font-bold">Choose Your Role</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
          <AnimatedLinkCard
            href="/protected/admin"
            imageSrc="/images/admin.webp"
            alt="Admin area"
            title="Admin"
          />
          <AnimatedLinkCard
            href="/protected/doctor"
            imageSrc="/images/doctor.webp"
            alt="Doctor area"
            title="Doctor"
          />
          <AnimatedLinkCard
            href="/protected/patient"
            imageSrc="/images/patient.webp"
            alt="Patient area"
            title="Patient"
          />
        </div>
      </div>
    </div>
  );
}
