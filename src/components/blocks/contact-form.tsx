import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    let phone = formData.get("phone") as string

    // Ensure phone is in E.164 format (starts with +)
    if (!phone.startsWith("+")) {
      phone = "+" + phone.replace(/^0+/, "")
    }

    try {
      const response = await fetch("https://api.altan.ai/galaxia/hook/6zkOCV", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast({
        title: "Success!",
        description: "We'll contact you shortly.",
      })

      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md p-6">
      <h2 className="mb-6 text-2xl font-semibold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            name="phone"
            type="tel" 
            placeholder="+1234567890"
            pattern="\\+?[1-9]\\d{1,14}"
            title="Please enter a valid phone number in international format (E.164)"
            required 
          />
          <p className="text-sm text-muted-foreground">Format: +[country code][number] (e.g., +34662039902)</p>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Information"}
        </Button>
      </form>
    </Card>
  )
}