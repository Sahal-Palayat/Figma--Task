import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

function Sales() {
  return (
    <div>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto flex justify-between">
          {/* Deals Section (Left) */}
          <div className="w-1/3 pr-8">
            <div className="mb-8 text-left">
              <h2 className="text-3xl font-semibold mb-4">Deals Of The Month</h2>
              <p className="text-gray-500 mb-6 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin diam sem.
                Scelerisque duis ultrices sollicitudin.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-none px-8 py-2">
                Buy Now
              </Button>
            </div>

            {/* Countdown Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Hurry, Before It&apos;s Too Late!</h3>
              <div className="flex justify-center gap-6">
                {[{ value: "02", label: "Days" }, { value: "06", label: "Hr" }, { value: "05", label: "Mins" }, { value: "30", label: "Sec" }].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-white shadow-md text-2xl font-mono w-16 h-16 flex items-center justify-center mb-2">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Section (Right) */}
          <div className="w-fit relative">
            <Card className="overflow-hidden pt-8">
              <div className="grid grid-cols-3 gap-4">
                {/* First Image with Custom Height */}
                <div className="relative h-full" style={{ height: '350px' }}>
                  <img
                    src="/sales1.png"
                    alt="Glass coffee table"
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 text-sm">
                    30% OFF
                  </div>
                </div>
                
                {/* Other Images with Square Aspect Ratio */}
                <div className="relative aspect-square">
                  <img
                    src="/sales2.png"
                    alt="Bar globe"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="relative aspect-square">
                  <img
                    src="/sales3.png"
                    alt="Wall clock"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-black" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sales;
