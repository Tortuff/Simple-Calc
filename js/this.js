'use strict';


// const calculator = {

//     read(a, b) {
//         this['a'] = a;
//         this['b'] = b;
//     },

//     sum() {
//         let a = this['a'];
//         let b = this['b'];
//         if (typeof(a) != 'number' || typeof(b) != 'number') {
//             return console.error('[Method.sum] => Wrong value.');
//         } else {
//             return console.log('[Method.sum] => ', a + b );
//         }
//     },

//     mul() {
//         let a = calculator['a'];
//         let b = calculator['b'];
//         if (typeof(a) != 'number' || typeof(b) != 'number') {
//             return console.error('[Method.mul] => Wrong value.');
//         } else {
//             return console.log('[Method.mul] => ', a * b );
//         }
//     },
// };

// const ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
// };

// function BigUser() {

//     this.name = "Вася";
  
//     return;
// }

// const vasya = new BigUser();

// console.log('[vasya.name] => ', vasya.name);

function Calc() {

    this.read = function() {
        this['a'] = +prompt('Объектом А будет:', '10');
        this['b'] = +prompt('Объектом B будет:', '15');
    };
    
    this.sum = function() {
        let a = this['a'];
        let b = this['b'];
        if (typeof(a) != 'number' || typeof(b) != 'number') {
            return console.error('[Method.sum] => Wrong value.');
        } else {
            return console.log('[Method.sum] => ', a + b );
        }
    };
    
    this.mul = function() {
        let a = this['a'];
        let b = this['b'];
        if (typeof(a) != 'number' || typeof(b) != 'number') {
            return console.error('[Method.mul] => Wrong value.');
        } else {
            return console.log('[Method.mul] => ', a * b );
        }
    };

};

const newCalc = new Calc();

newCalc.read();

console.log('[newCalc.a] => ', newCalc.a);
console.log('[newCalc.b] => ', newCalc.b);

newCalc.sum();
newCalc.mul();
