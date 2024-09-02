import { Menu } from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return( 
     <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/category/Pizzas" className="block">Pizzas</Link>
            <Link href="/category/Hamburgesas" className="block">Hamburguesas</Link>
            <Link href="/category/Sandwichs" className="block">Sandwichs</Link>
        </PopoverContent>
     </Popover>
    );

}

export default ItemsMenuMobile ;