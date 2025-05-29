import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/blocks/user-auth-form"

const roleMessages = {
  student: "Create your student account to access laboratory resources",
  faculty: "Set up your faculty account to manage laboratory sessions",
  admin: "Create your admin account to manage the CCIS Laboratory system",
}

export default function SignUpPage() {
  const navigate = useNavigate()
  const [role, setRole] = React.useState("")

  useEffect(() => {
    const selectedRole = localStorage.getItem("selectedRole")
    if (!selectedRole) {
      navigate("/onboarding")
      return
    }
    setRole(selectedRole)
  }, [navigate])

  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0">
            <img
              src="/pup_pic.jpg"
              alt="PUP Campus"
              className="object-cover w-full h-full brightness-[.5]"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M9 2h6l3 7.056V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9.944L9 2z" />
              <path d="M6 9h12" />
              <path d="M9 2v7" />
              <path d="M15 2v7" />
            </svg>
            CCIS Laboratory
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Streamline your laboratory room and equipment reservations with our efficient management system.&rdquo;
              </p>
              <footer className="text-sm">CCIS Admin</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                {roleMessages[role] || "Please select your role first"}
              </p>
            </div>
            <UserAuthForm role={role} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 