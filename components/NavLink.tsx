"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface NavLinkProps
{
    href: string,
    label: string,
    className?: string,
}


function NavLink({href, label, className}:NavLinkProps) {

    const pathname = usePathname();
  return (
    <Link 
      className={`py-3 hover:text-orange transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${className}
      ${
          pathname === href 
          ? "after:scale-x-100 after:origin-right" 
          : "after:scale-x-0 after:origin-left"
      }
      `}
      href={href}>
        {label}
    </Link>
  )
}

export default NavLink