Promise.resolve()
.then(() => console.log(1)) //1
.catch(() => console.log(3))
.then(() => { console.log(2); throw new Error(); }) //2 Error
.then(() => console.log(4))
.then(() => console.log(4))
// Promise.resolve() -ը վերադարձնում է promise, resolve-ի ժամանակ օգտագործում ենք then մեթոդը, reject-ի ժամանակ catch մեթոդը։ Կմտնի then-ի մեջ կտպի 1, catch-ի մեջ չի մտնի քանի որ promise resolve եղել, reject չի եղել։ Դա էլ իր հերթին վերադարձնում է promise, կտպի then-ի մեջի log-ը 2, հետո կշպրտի Error, էլ չի գնա առաջ,կվերջանա կոդը։ 


// Promise.resolve()
// .then(() => console.log(11))
// .then(() => { console.log(12); throw new Error(); })
// .catch(() => console.log(13))
// .catch(() => console.log(14))
// .then(() => console.log(15))