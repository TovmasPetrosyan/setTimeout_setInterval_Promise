function mapPromise(promise,fun){
return new Promise((resolve,reject) =>{
    promise.then((value) =>{
        const transformer = fun(value);
        if(transformer){
            resolve(transformer);
        }
        reject(value);
        
    }).catch((err) =>{
        reject(err);
    })
})
}

const myPromise = new Promise((resolve, reject) => { resolve(2) })
const timesTwo = (val) => val * 2
mapPromise1(myPromise, timesTwo).then(result => console.log(result)).catch((err) =>{
    console.log(err);
})

function mapPromise1(promise,fun){
    return promise.then((res)=>{
        return fun(res);
    })
}