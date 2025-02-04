import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  return (
    <Card className="w-full max-w-md p-6">
      <h2 className="mb-6 text-2xl font-semibold">Contact Us</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" required />
        </div>
        <Button type="submit" className="w-full">
          Request Information
        </Button>
      </form>
    </Card>
  )
}