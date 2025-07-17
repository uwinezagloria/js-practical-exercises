function transformKeys(obj){
    var obj1={}
    for (let key in obj){
        obj1[key.toUpperCase()]=obj[key]

    }
    return obj1
}
console.log(transformKeys({age:12,name:"wineza"}))