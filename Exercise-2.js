function squarePromise(promise){
return new Promise((resolve,reject) =>{
    promise.then((value) =>{
        if(typeof value === "number"){
            resolve( value * value);
        } else if(!isNaN(value)){
            resolve(value * value);
        } else {
            reject(`Cannot convert ${value} to a number`);
        }
    }).catch((err) => {
        reject(err);
    })
})
}
// const numberP = Promise.resolve('abc');

// squarePromise(numberP).then((res)=>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })
