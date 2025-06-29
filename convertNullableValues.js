function convertNullableValues(obj){
for(let key in obj){
    if(obj[key]=== null){
        obj[key]=0
    }
    if(obj[key]=== undefined){
        obj[key]=" "
    }
}
return obj
}
 let obj={
    name:"uwineza",
    age:null,
    phone:undefined
 };
 console.log(convertNullableValues(obj))