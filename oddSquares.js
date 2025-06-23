function oddSquares(array){
let odd=array.filter(num=>num%2!==0)
let squared=odd.map(function(num){
    num *=num
    return num
})
return squared
}
console.log(oddSquares([1,2,3,4,5]))