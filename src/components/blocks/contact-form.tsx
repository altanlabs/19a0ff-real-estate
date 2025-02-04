import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    let phone = formData.get("phone") as string

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

      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "An agent will call you soon",
      })

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md p-6">
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <AlertDescription className="ml-3 text-green-700 dark:text-green-300">
            An agent will call you soon
          </AlertDescription>
        </Alert>
      </Card>
    )
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
            placeholder="+34662039902"
            pattern="[+][0-9]{1,}"
            required 
          />
          <p className="text-sm text-muted-foreground">Format: +[country code][number]</p>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Information"}
        </Button>
      </form>
    </Card>
  )
}