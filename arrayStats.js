function arrayStats(array){
    let add=array.reduce((acc,curr)=>acc+curr);
    let avg=add/array.length;
    let maximum=Math.max(...array);
    let minimum=Math.min(...array);
    let arrayObject={
        sum:add,
        average:avg,
        min:minimum,
        max:maximum
    };
    return arrayObject;
}
console.log(arrayStats([1,2,3,4,5]));