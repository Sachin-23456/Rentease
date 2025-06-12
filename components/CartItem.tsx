import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
    days: number
    image?: string
  }
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center space-x-4 border-b pb-4">
      <div className="relative w-24 h-24">
        <Image 
          src={item.image ?? "/placeholder.svg"} // ✅ Use optional chaining fallback
          alt={item.name}
          fill // ✅ Correct usage for absolute positioning
          className="rounded-md object-cover" // ✅ Move objectFit to Tailwind
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">
          ₹{item.price}/day for {item.days} days
        </p>
        <p className="font-semibold">Total: ₹{item.price * item.days}</p>
      </div>
      <Button variant="destructive" size="icon">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
