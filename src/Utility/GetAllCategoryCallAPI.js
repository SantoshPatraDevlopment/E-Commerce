

export async function GetAllCategoryCallAPI(props) {
    let  url='https://dummyjson.com/products/categories';
    let response= await fetch(url,{method:'GET'});
    let data=await response.json();
    return data;
 
}



export async function GetAllProductCallAPI(props) {
    let  url='https://dummyjson.com/products';
    let response= await fetch(url,{method:'GET'});
    let data=await response.json();
    return data;

}


// export default(GetAllCategoryCallAPI,GetAllProductCallAPI)