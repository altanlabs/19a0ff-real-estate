import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdfZXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Luxury Modern Villa</h1>
          <p className="mb-8 text-xl">Experience the perfect blend of comfort and elegance</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Schedule a Visit
          </Button>
        </div>
      </div>
    </div>
  )
}