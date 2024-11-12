
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
const ProductDetails = () => {
    return (
        <div>
            {/* Product Categories */}
            <section className="container mx-auto px-4 py-8">
                <h3 className="text-4xl font-semibold mb-4 text-gray-800">Product Category</h3>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 pt-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                            {/* Image Container */}
                            <div className="w-16 h-16 rounded-lg mb-2 overflow-hidden">
                                <img
                                    src="/Images-1.png" // Replace with your actual image path
                                    alt={`Category ${i + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="text-sm">Category {i + 1}</span>
                        </div>
                    ))}
                </div>


            </section>

            {/* Product Grid */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <img
                                    src="/Images.png"
                                    alt="Product 1"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                >
                                    ♡
                                </Button>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold mb-1">Hand Clock</h4>
                                    <div className="text-yellow-500">★★★★★</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">₹999.00</div>
                                    <div className="text-sm text-muted-foreground">Add to cart</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <img
                                    src="/Images-1.png"
                                    alt="Product 2"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                >
                                    ♡
                                </Button>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold mb-1">Wall mounted </h4>
                                    <div className="text-yellow-500">★★★★☆</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">₹1,499.00</div>
                                    <div className="text-sm text-muted-foreground">Add to cart</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>


                    <Card>
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <img
                                    src="/Images-2.png"
                                    alt="Product 2"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                >
                                    ♡
                                </Button>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold mb-1">Table Lamp</h4>
                                    <div className="text-yellow-500">★★★★☆</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">₹1,499.00</div>
                                    <div className="text-sm text-muted-foreground">Add to cart</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>


                    <Card>
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <img
                                    src="/Images-3.png"
                                    alt="Product 2"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                >
                                    ♡
                                </Button>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold mb-1">Table Lamp</h4>
                                    <div className="text-yellow-500">★★★★☆</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">₹1,499.00</div>
                                    <div className="text-sm text-muted-foreground">Add to cart</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>


                    <Card>
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <img
                                    src="/Images-4.png"
                                    alt="Product 2"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                >
                                    ♡
                                </Button>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold mb-1">Table Lamp</h4>
                                    <div className="text-yellow-500">★★★★☆</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">₹1,499.00</div>
                                    <div className="text-sm text-muted-foreground">Add to cart</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>


                    <Card>
                        <CardContent className="p-4">
                            <div className="relative mb-4">
                                <img
                                    src="/Images-5.png"
                                    alt="Product 2"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2"
                                >
                                    ♡
                                </Button>
                            </div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold mb-1">Table Lamp</h4>
                                    <div className="text-yellow-500">★★★★☆</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">₹1,499.00</div>
                                    <div className="text-sm text-muted-foreground">Add to cart</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>



                    {/* Add additional Card components for each item as needed */}

                </div>

                <hr className="mt-14 border-0 bg-black h-2" />
            </section>

        </div>
    )
}

export default ProductDetails
