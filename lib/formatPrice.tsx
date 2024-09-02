export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('ar-AR', {
        style: "currency",
        currency: "ARS"
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice
}