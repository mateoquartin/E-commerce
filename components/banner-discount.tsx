import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
      <div className="p-5 sm:p-20 text-center ">
        <h2 className="uppercase font-black text-2xl text-primary">Consigue un 20%</h2>
        <h3 className="mt-3 font-semibold">Con tu compra superior a $30.000. Usando el codigo de BURGAS&CO</h3>
      <div className="max-m-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>Comprar</Link>
        <Link href="#" className={buttonVariants({variant :"outline"})}>Más informacion</Link>
      </div>
      </div>
    );
  }
  
  export default BannerDiscount;