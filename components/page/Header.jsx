"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiBell } from 'react-icons/bi'
import React from "react";
import { FaBars } from "react-icons/fa";
import { SheetSide } from "../shadcn/Sheet";


function Header({ updateMobileMenuState, mobileMenuShow, darkMode }) {
    // const handleClick = () => {
    // updateMobileMenuState(!mobileMenuShow)

    // }
    return (
        <div className=" bg-white rounded-lg sticky  mt-0 lg:rounded-b-lg top-0 z-50 ">
            <div className="w-full  ">
                <header className="flex  items-center py-1 md:py-2 "><SheetSide />
                    <Link href="/" className="inline-flex items-center mx-auto text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">

                        <Image src={`${darkMode ? '/tutionAppWhite.svg' : '/tutionApp.svg'}`} height={35} width={150} />

                    </Link>
                    <Link type="button" className=" inline-flex items-center bg-white dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 focus-visible:ring ring-rose-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2" href='/notifications' passHref>

                        <BiBell className="h-6 w-6" />

                    </Link>
                </header>
            </div>
        </div>
    );
}



export default Header;