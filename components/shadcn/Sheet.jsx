"use client"

import { FaBars } from "react-icons/fa6";
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"

const SHEET_SIDES = ["left"]

export function SheetSide() {
    return (
        <div>
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <Button size="lg" variant="outline position"><FaBars /></Button>
                    </SheetTrigger>
                    <SheetContent side={side} className=" rounded-lg w-[300px]"
                     >
                       
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
