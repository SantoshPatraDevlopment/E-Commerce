

export function capitalizeFirstLetter(string) {
    return string.slug.charAt(0).toUpperCase() + string.slug.slice(1);
}

// common function using for this------

export function getPriceAfterDiscount(price,discountpercentage){
    var p=price-price*(discountpercentage/100)
    return p.toFixed(2);

}

export function getTotalPriceOfCart(arrCart) {
    let price = 0.0;
    for (let e of arrCart) {
        console.log(arrCart)
        price+=  getPriceAfterDiscount(
            
            e.product.price,
            
            e.product.discountPercentage
        ) * e.quantity; 
       
    }
    return getPrecisionNumber(price);

}

export function getPrecisionNumber(no,precision=2){
    return parseFloat(no).toFixed(precision)
}


