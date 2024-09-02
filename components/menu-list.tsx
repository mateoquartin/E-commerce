"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                        Burgas & Co
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        Bienvenidos a Lomito & Co, el lugar donde se encuentran los sabores auténticos y las recetas tradicionales con un toque moderno. En nuestro establecimiento, nos especializamos en ofrecerte los mejores sándwiches de lomito, milanesas crujientes, pizzas irresistibles y hamburguesas jugosas
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                seccón dedicada a promociones y descuentos especiales
              </ListItem>
              <ListItem href="/" title="">
                
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/postres" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"





const components: { title: string; href: string; description: string }[] = [
    {
      title: "Hamburgesas",
      href: "http://localhost:3000/category/hamburgesas",
      description:
      "Una hamburguesa casera deliciosa con carne jugosa, lechuga crujiente, tomate fresco, cebolla caramelizada, queso derretido, y salsa especial en un pan suave y tostado"  },
    {
      title: "Pizzas",
      href: "http://localhost:3000/category/pizzas",
      description:
        "Pizzas artesanales con masa crujiente, salsa de tomate casera, mozzarella derretida, y toppings frescos como pepperoni, champiñones, pimientos y albahaca, cocinadas a la perfección en horno de leña..",
    },
    {
      title: "Sandwichs",
      href: "http://localhost:3000/category/sandwichs",
      description:
        "Un sándwich de lomito es un bocadillo jugoso y sabroso que incluye un tierno filete de lomo de res a la parrilla, acompañado de vegetales frescos, queso y aderezos en un pan crujiente"
  
    },
  ]
