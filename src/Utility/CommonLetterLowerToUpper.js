export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}





export function getPriceAfterDiscount(price,discountpercentage){
    var p=price-price*(discountpercentage/100)
    return p.toFixed(2);

}