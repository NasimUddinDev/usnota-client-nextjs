"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function ActiveLink({children,href,className}){

   const pathname = usePathname()

const style = { color: pathname === href && "#e11e63"}

 return (
    <Link href={href} style={style} className={className}>{children}</Link>
 )
}