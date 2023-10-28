function fun(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === "string") {
                resolve(value.toUpperCase());
            } else {
                reject(value);
            }
        }, 500);
    })
}
// fun(56).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })