/* eslint-disable @next/next/no-img-element */
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
    product: ProductType;
}

const CartItem = (props: CartItemProps) => {
    const { product } = props;
    const { removeItem } = useCart();

    return (
        <li className="flex py-6 border-b border-gray-300 dark:border-gray-700">
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
                alt={product.attributes.productName}
                className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">{product.attributes.productName}</h2>
                    <p className="font-bold text-gray-900 dark:text-white">{formatPrice(product.attributes.price)}</p>
                    <ProductTasteOrigin
                        taste={product.attributes.taste}
                        origin={product.attributes.origin}
                    />
                </div>
                <div>
                    <button
                        className={cn(
                            "rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md p-1 hover:scale-110 transition"
                        )}
                        onClick={() => removeItem(product.id)}
                    >
                        <X size={20} className="text-gray-900 dark:text-white" />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
