import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to your dashboard</p>
          </div>
          <Button size="lg">
            New Reservation
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reservations</CardTitle>
              <CardDescription>Your latest room reservations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No recent reservations found.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Available Rooms</CardTitle>
              <CardDescription>Current room availability status</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">All rooms are currently available.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                View Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Room Status
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 