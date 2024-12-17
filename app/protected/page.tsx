import AnimatedLinkCard from "@/components/animated-link-card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center gap-12 px-4 py-16 ">
      <h1 className="text-4xl font-bold">Choose Your Role</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
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
  );
}
