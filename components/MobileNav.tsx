'use client'

import Image from 'next/image'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden "
      >
        <SheetHeader>
          <Link
            href="/"
            className="relative flex items-center gap-2 max-sm-gap-1"
          >
            <Image
              src={'/images/book-recipe.png'}
              width={32}
              height={32}
              alt={'recipe book'}
            />
            <h1 className="font-bold text-primary  text-shadow uppercase  hover:text-primary/80 ">
              Delicious dishes - recipes
            </h1>
          </Link>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 ">
          <Link
            href="/"
            className={`flex items-center gap-2  text-xl hover:text-primary ${
              pathname === '/' ? 'text-primary' : ''
            } `}
          >
            <h4 className="tracking-wider">Home</h4>
          </Link>

          <Link
            href="/recipes"
            className={`flex items-center gap-2  text-xl hover:text-primary ${
              pathname === '/recipes' ? 'text-primary' : ''
            } `}
          >
            <h4 className="tracking-wider">Recipes</h4>
          </Link>
          <Link
            href="/blogs"
            className={`flex items-center gap-2  text-xl hover:text-primary ${
              pathname === '/blogs' ? 'text-primary' : ''
            }`}
          >
            <h4 className="tracking-wider">Blogs</h4>
          </Link>
          <Link
            href="/gallery"
            className={`flex items-center gap-2  text-xl hover:text-primary ${
              pathname === '/gallery' ? 'text-primary' : ''
            }`}
          >
            <h4 className="tracking-wider">Gallery</h4>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
