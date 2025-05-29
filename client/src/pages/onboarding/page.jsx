import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const roles = [
  {
    title: "Student",
    description: "Access laboratory rooms and equipment for your academic needs",
    icon: "👨‍🎓",
  },
  {
    title: "Faculty",
    description: "Manage laboratory sessions and equipment for your classes",
    icon: "👨‍🏫",
  },
  {
    title: "Admin",
    description: "Full control over laboratory resources and user management",
    icon: "👨‍💼",
  },
]

export default function OnboardingPage() {
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    // Store the selected role and navigate to signup
    localStorage.setItem("selectedRole", role.toLowerCase())
    navigate("/signup")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Welcome to CCIS Laboratory</h1>
        <p className="text-muted-foreground">Please select your role to continue</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3 max-w-5xl w-full">
        {roles.map((role) => (
          <Card
            key={role.title}
            className="cursor-pointer transition-all hover:shadow-lg"
            onClick={() => handleRoleSelect(role.title)}
          >
            <CardHeader>
              <div className="text-4xl mb-2">{role.icon}</div>
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Continue as {role.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 