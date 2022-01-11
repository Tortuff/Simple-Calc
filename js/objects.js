'use strict';


// const user = {};

// user.name = 'John';
// user.surname = 'Smith';
// console.log('[user] => ', user);

// user.name = 'Pete';
// console.log('[user] => ', user);

// delete user.name;
// console.log('[user] => ', user);

// function isEmpty(obj) {
//     if (typeof(obj) != 'object') {
//         return false;
//     } else {
//         if (Object.keys(obj).length == 0) {
//             return true;
//         } else {
//             return false;
//         }

//         /**Альтернативный вариант
//          * for (let key in obj) {
//          * // Если тело цикла начнёт выполняться - значит в объекте есть свойства;
//          *  return false
//          * }
//          * 
//          * return true;
//          */
//     }
// }

// const obj1 = {};
// const obj2 = {name: 0};

// console.log('[isEmpty(obj1)] => ', isEmpty(obj1));
// console.log('[isEmpty(obj2)] => ', isEmpty(obj2));
// console.log('[obj1] => ', obj1);

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// function getSum(obj) {
//     if (typeof(obj) != 'object') return 'Wrong value!';

//     let sum = 0;

//     for (let key in obj) {
//         sum += obj[key];
//     };

//     return sum;
// };

// const anyObj = {};
// const anyNum = 12;

// console.log('[getSum(salaries)] => ', getSum(salaries));
// console.log('[getSum(anyObj)] => ', getSum(anyObj));
// console.log('[getSum(anyNum)] => ', getSum(anyNum));

// function multiplyNum(obj) {
//     if (typeof(obj) != 'object') return 'Wrong value!';

//     for (let key in obj) {
//         if (typeof(obj[key]) == 'number') obj[key] *= 2 ;
//     }
// }

// const menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// const anySrt = 'Lalala'

// console.log('[menu] => ', menu);

// multiplyNum(menu);

// console.log('[menu] => ', menu);
// console.log('[multiplyNum(anySrt)] => ', multiplyNum(anySrt));