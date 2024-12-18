import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  return (
    <>
      <main className="flex flex-col gap-12 md:gap-20 pb-20">
        <nav className="w-full flex justify-center border-b border-b-foreground/10">
          <div className="w-full max-w-7xl flex   justify-between items-center p-3 py-5 text-sm">
            <Image
              src={"/images/logo.webp"}
              alt="logo"
              width={1980}
              height={1240}
              className="w-16 h-16"
            />
            <div className="flex gap-2 items-center">
              <HeaderAuth />
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
        <div className="flex flex-col gap-20 ">
          <div className="w-full h-full flex flex-col items-center text-center px-6 md:px-12">
            <h1 className="text-[3rem] md:text-[4rem] text-primary font-bold">
              Welcome to MediConnect!
            </h1>
            <p className="text-lg md:text-xl text-patient-secondary-text mt-4 max-w-3xl">
              Empowering secure and seamless communication between doctors and
              patients. Your health, our priority.
            </p>
            <div className="mt-8">
              <Link href="/sign-in">
                <Button className=" py-4 h-12 px-6 rounded-lg text-lg font-semibold">
                  Sign In to Get Started
                </Button>
              </Link>
            </div>
          </div>
          <section className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Why Choose MediConnect?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[900px] mx-auto">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full  max-w-[18rem]  flex justify-center items-center">
                  <Image
                    src="/images/calendar-management.webp"
                    alt="Schedule management"
                    width={1960}
                    height={1280}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">Schedule Management</h3>
                  <p className="text-sm text-patient-secondary-text">
                    Manage appointments with ease and stay organized.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full max-w-[25rem] flex justify-center items-center">
                  <Image
                    src="/images/security.webp"
                    alt="Secure communication"
                    width={1960}
                    height={1280}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">
                    Secure Communication
                  </h3>
                  <p className="text-sm text-patient-secondary-text">
                    End-to-end encryption to protect sensitive conversations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-full  max-w-[18rem] flex justify-center items-center">
                  <Image
                    src="/images/medical-care.webp"
                    alt="Personalized care"
                    width={1960}
                    height={1280}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">
                    Personalized Profiles
                  </h3>
                  <p className="text-sm text-patient-secondary-text">
                    Tailored profiles for doctors and patients to enhance care.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
