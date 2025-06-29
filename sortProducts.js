function sortProducts(obj){
   return obj.sort((a,b)=>a.price-b.price)
}

let products=[{
name:"rice",
price:1500
},{
 name:"cookies",
price:100  
},
{
 name:"chocolate",
price:3000  
}]

    
console.log(sortProducts(products))
