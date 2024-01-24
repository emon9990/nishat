
import Image from "next/image"
import { Card, CardContent } from "../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel"
import caurosle from '@/public/caurosle.png'

export function ShadSlider() {
    return (
       
            <div className="w-[100%]  relative">
                <Carousel className="w-full p-0 ">
                     <CarouselContent>
                     {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="">
                                    <Card>
                                        <CardContent className="flex w-[100%]" >
                                            <Image src={caurosle} className="w-[100%] h-[100%]"  />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}  
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-[50%] left-0" />
                    <CarouselNext className="absolute top-[50%] right-0" />
                </Carousel>
            </div>
       
    )
}