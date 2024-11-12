
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
const Banner = () => {
    return (
        <div>
            <div className="min-h-screen bg-background">
                {/* Header */}
                <header className="">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="text-4xl font-semibold text-gray-800">ARC</div>
                        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xl mx-8">
                            <div className="relative w-full">
                                <Input className="w-full pl-8" placeholder="Search products..." />
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            </div>
                        </div>
                        <nav className="flex items-center space-x-4">
                            <Button variant="ghost">Home</Button>
                            <Button variant="ghost">Products</Button>
                            <Button variant="ghost">Cart</Button>
                            <Button variant="ghost">Wishlist</Button>
                            <Button variant="ghost">Notification</Button>

                            <Button>
                                SignUp
                            </Button>
                        </nav>
                    </div>
                </header>


                <section className="container mx-auto px-4 py-8">
                    <div className="relative">
                        {/* Top Row of Images */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            <div className="col-span-2 row-span-1">
                                <img
                                    src="/bnr1.png"
                                    alt="Living room"
                                    className="rounded-md object-cover w-full h-[200px]"
                                />
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src="/bnr4.png"
                                    alt="Decorative items"
                                    className="rounded-lg object-cover w-full h-[400px]"
                                />
                            </div>
                            
                        </div>

                        {/* Centered Sale Banner */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="bg-white text-center shadow-lg rounded-md px-8 py-6 w-[300px]">
                                <h2 className="text-4xl font-extrabold mb-2 tracking-wide">ULTIMATE</h2>
                                <div className="text-5xl font-light mb-4 tracking-widest text-gray-200">SALE</div>
                                <Button className="bg-black text-white hover:bg-gray-800 rounded-none px-8">
                                    SHOP NOW
                                </Button>
                            </div>
                        </div>

                        {/* Bottom Row of Images */}
                        <div className="">
                        <div className="absolute top-52 ml-5 h-20 md:col-span-1">
                                <img
                                    src="/bnr3.png"
                                    alt="Modern chairs"
                                    className="rounded-lg object-cover w-full h-[405px]"
                                />
                            </div>
                            <div className="ml-96 col-span-2">
                                <img
                                    src="/bnr2.png"
                                    alt="Yellow wall decor"
                                    className="rounded-lg object-cover w-full h-[200px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>






                <section className="w-full">
                    <div className="flex w-full justify-between items-center">
                        <img src="her3.png" alt="Image 1" className="w-[10%] h-30 rounded-md" />
                        <img src="her2.png" alt="Image 2" className="w-[80%] h-30 rounded-md" />
                        <img src="her1.png" alt="Image 3" className="w-[10%] h-30 rounded-md" />
                    </div>
                </section>






            </div>
        </div>
    )
}

export default Banner
