import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Calidad Excepcional</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">Comida deliciosa</h4>
                <p className="my-2 text-lg">Adentrate en los increibles sabores de nuestra variedad de platos.</p>
                <Link href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Comprar</Link>

            </div>
            <div className="w-full h-[600px] bg-cover lg:h-[400px] bg-[url(/bannerprod.jpg)] bg-center mt-8" />
        </>
    );
}

export default BannerProduct;