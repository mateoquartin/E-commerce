"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id : 1,
        title : "Envío en 25/35 min",
        description: "Como cliente VIP, tus envios en 25/35 min. Obten mas informacion y únete",
        link: "#!"
    },
    {
        id : 2,
        title : "Consigue hasta un -25% en compras superiores a $10.000",
        description: "-20 % al gastar mas de $15.000 o -25 % al gastar mas   $20.000",
        link: "#!"
    },
    {
        id : 3,
        title : "Accede a beneficios por compras superiores a $30.000",
        description: "Por compras superiores a $30.000, te mandamos gratis una CocaCola de 1,5L",
        link: "#!"
    }
]


const CarouselTextBanner = () => {
    const router = useRouter()
    return(
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay:2500 //ms
                })
            ]}
            >
                

            <CarouselContent>
                {dataCarouselTop.map(({id, title, link, description})=> (
                    <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="felx felx-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;