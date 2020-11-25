/*one option for gcd of two numbers
let gcd = function(x, y) {
    let smaller = Math.min(x, y);
    let larger = Math.max(x, y);

    if (larger % smaller === 0) {
        return smaller;
    } else {
        return gcd(smaller, larger % smaller)
    }
}*/


/*for testing the functions below
let numbArray = [4, 16, 24, 8, 12];*/

let numbArray = ['a', 'b', 'c', 'd'];

let a = Number(document.querySelector('numb1').value);
let b = Number(document.querySelector('numb2').value);
let c = Number(document.querySelector('numb3').value);
let d = Number(document.querySelector('numb4').value);

a = nubmArray[0];
b = nubmArray[1];
c = nubmArray[2];
d = nubmArray[3];

let gcd = function(x, y) {
    x = Math.abs(x)
    y = Math.abs(y)
    while (x != y) {
        if (x > y) x -= y
        else y -= x
    }
    return x;
    }

let gcdArr = function(arr) {
    let gcdres = gcd(arr[0], arr[1])
    for (let i=3; i<arr.length; i++) {
        gcdres = gcd(gcdres, arr[i]);
        }
        return gcdres;
    }

console.log(gcdArr(numbArray));


/*just in case, for testing another methods
const min = Math.min(...numbArray);
const max = Math.max(...numbArray);*/


/*an option for gcd for more than two nmbers 
function gcd_more_than_two_numbers(input) {
    if (toString.call(input) !== "[object Array]")  
        return  false;  
    let len, a, b;
        len = input.length;
        if ( !len ) {
            return null;
        }
        a = input[ 0 ];
        for ( var i = 1; i < len; i++ ) {
            b = input[ i ];
            a = gcd_two_numbers( a, b );
        }
        return a;
    }*/