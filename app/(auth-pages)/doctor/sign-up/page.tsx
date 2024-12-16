import { signUpAction } from "@/app/actions/doctor-actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <Card className="w-full max-w-[24rem] mx-auto p-5 shadow-md">
      <form className="flex flex-col">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text-foreground">
          Already have an account?{" "}
          <Link
            className="text-primary font-medium underline"
            href="/doctor/sign-in"
          >
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="name">Name</Label>
          <Input name="name" placeholder="Dr. John Doe" required />

          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <Label htmlFor="phone">Phone</Label>
          <Input name="phone" placeholder="1234567890" required />

          <Label htmlFor="specialty">Specialty</Label>
          <Input name="specialty" placeholder="e.g., Cardiology" required />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />

          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </Card>
  );
}
