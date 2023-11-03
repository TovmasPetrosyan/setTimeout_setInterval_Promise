Promise.resolve()
.then(() => console.log(1)) //1
.catch(() => console.log(3))
.then(() => { console.log(2); throw new Error(); }) //2 Error
.then(() => console.log(4))
.then(() => console.log(4))
// Promise.resolve() -ը վերադարձնում է promise, resolve-ի ժամանակ օգտագործում ենք then մեթոդը, reject-ի ժամանակ catch մեթոդը։ Կմտնի then-ի մեջ կտպի 1, catch-ի մեջ չի մտնի քանի որ promise resolve եղել, reject չի եղել։ Դա էլ իր հերթին վերադարձնում է promise, կտպի then-ի մեջի log-ը 2, հետո կշպրտի Error, էլ չի գնա առաջ,կվերջանա կոդը։ 


Promise.resolve()
.then(() => console.log(11)) // 11
.then(() => { console.log(12); throw new Error(); }) //12 Error
.catch(() => console.log(13)) // 13
.catch(() => console.log(14))
.then(() => console.log(15))   // 15
// Promise.resolve() -ը վերադարձնում է promise, resolve-ի ժամանակ օգտագործում ենք then մեթոդը, reject-ի ժամանակ catch մեթոդը։ Կմտնի then-ի մեջ կտպի 11, հետո կմտնի հաջորդ then-ի կտպի 12 ու error կնետի, կմտնի catch բլոկ կտպի 13: Չի մտնի մյուս catch-ի մեջ քանի որ արդեն գտել ենք error-ի case: Դա էլ իր հերթին վերադարձնում է promise, կտպի then-ի մեջի log-ը 15:


Promise.resolve()
.then(data => {
throw new Error('Api Error');
return 1;
})
.then(data => console.log('ok'))
.catch(error => {
console.log(error.message);// 'Api Error'
return "2";
})
.then(data => {
console.log(data); // 2
})
console.log(1)   // 1
setTimeout(() => {
console.log(2)  // 2
}, 20)
// Քանի որ ասինխրոն է այսինքն promise, դրա կատարումը կլինի ավելի ուշ
// քան 32 տողի log-ը, կտպի 1, 33-րդ տողում setTimeout() մեջի callback
// ֆունկցիան կկատարվի 20 վարկյան հետո։Կմտնի promise բլոկ, տեսնում ենք որ error կա, կմտնի
// cacth բլոկ կտպի 'Api Error' ու կվերադարձնի "2", որը 30-րդ տողում կտպի 2: Վերջում կտպի 34-րդ տողի log-ը։



Promise.resolve()
.then(() => {
console.log(3)  // 3
return 1
})
.catch(e => console.log(e, 4))
.finally(res => console.log(res, 5)) //  undefined 5
.then((res) => console.log(res))  // 1
console.log(6)  // 6
let a = 5;
setTimeout(() => {
console.log(a);  //5 
a = 10;
}, 0);
// Սկզբից կտպի 6, հետո կանցնի promise-ին, կտպի 3 ու կվերադարձնի 1:
// Քանի որ արդյունքը վերցնում ենք then -ով , 49-րդ տողում կտպի undefined 5,
// մյուս տողում կստանանք promise-ի արդյունքը 1: Վերջում կաշխատի setTimeout() 
// callback ֆունկցիան կտպի 5:

