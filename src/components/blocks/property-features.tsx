export function PropertyFeatures() {
  const features = [
    {
      icon: "🛏️",
      title: "4 Bedrooms",
      description: "Spacious rooms with en-suite bathrooms",
    },
    {
      icon: "🚗",
      title: "2 Car Garage",
      description: "Secure parking with automatic doors",
    },
    {
      icon: "🏊‍♂️",
      title: "Swimming Pool",
      description: "Heated pool with lounging area",
    },
    {
      icon: "🌳",
      title: "Garden",
      description: "Landscaped garden with irrigation system",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg p-6 text-center shadow-sm"
        >
          <span className="mb-4 text-4xl">{feature.icon}</span>
          <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}