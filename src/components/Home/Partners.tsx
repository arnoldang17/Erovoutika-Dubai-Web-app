import { Card, CardContent } from "@/components/ui/card"
const images = Array.from({ length: 7 }, (_, i) => 
  `/src/assets/images/partners/${i + 1}.png`
);

export default function Partners() {

return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
        <Card className="w-full bg-white shadow-md rounded-lg p-4">
            <CardContent className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-4">
                {/* <h3 className="text-xl font-semibold">We are proud to partner with:</h3> */}
            </div>
            <div className="flex items-center flex-wrap justify-center p-1 gap-6">
                {images.map((image, index) => (
                <div key={index} className="flex items-center w-[200px] h-[200px]">
                    <img
                    src={image}
                    alt={`Partner ${index + 1}`}
                    className="object-cover"
                    />
                </div>
                ))}
            </div>
            </CardContent>
        </Card>
    </div>
    
)
}
