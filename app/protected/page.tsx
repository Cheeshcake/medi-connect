import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
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
    <div className="flex-1 w-full flex flex-col gap-12 text-center">
      <Link href={"/protected/admin"}>admin</Link>
      <Link href={"/protected/doctor"}>doctor</Link>
      <Link href={"/protected/patient"}>patient</Link>
    </div>
  );
}
