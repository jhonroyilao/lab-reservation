import * as React from "react"
import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export function UserAuthForm({ className, role, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    const studentId = formData.get("studentId")
    const employeeId = formData.get("employeeId")
    const adminId = formData.get("adminID")
    const fullName = formData.get("fullName")
    const facultyName = formData.get("facultyName")

    try {
      // TODO: Add your signup logic here with role-specific data
      console.log({
        role,
        email,
        password,
        studentId,
        employeeId,
        adminId,
        fullName,
        facultyName
      })
      
      // For now, we'll just simulate a delay and redirect to dashboard
      await new Promise(resolve => setTimeout(resolve, 1000))
      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          {role === "student" && (
            <div className="space-y-4">
              <div className="grid gap-1">
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  name="studentId"
                  placeholder="2020-01234-MN-0"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Juan Dela Cruz"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              required
            />
            </div>
            </div>
          )}
          
          {(role === "faculty") && (
            <div className="space-y-4">
              <div className="grid gap-1">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input
                  id="employeeId"
                  name="employeeId"
                  placeholder="EMP-0000"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="facultyName">Full Name</Label>
                <Input
                  id="facultyName"
                  name="facultyName"
                  placeholder="Juan Dela Cruz"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>


              <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              required
            />
            </div>
            </div>
          )}

          {(role === "admin") && (
            <div className="space-y-4">
            <div className="grid gap-1">
              <Label htmlFor="adminID">Admin ID</Label>
              <Input
                id="adminID"
                name="adminID"
                placeholder="0000-1111"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
            <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              required
            />
            </div>
            </div>
          )}

         

          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              disabled={isLoading}
              name="password"
              required
            />
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up as {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
} 
