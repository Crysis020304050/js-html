'use strict';

/*1*/
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}

/*2*/
    function numbersInDirectOrder(x,y) {
        if (isNaN(+x) || isNaN(+y)) {
            return console.log("Not a number");
        }
        else {
            if (y >= x) {
                console.log(x);
                x++;
                numbersInDirectOrder(x,y);
            }
        }
    }

    function numbersInReverseOrder(x,y) {
        if (isNaN(+x) || isNaN(+y)) {
            return console.log("Not a number");
        }
        else {
            if (y >= x) {
                console.log(y);
                y--;
                numbersInReverseOrder(x,y);
            }
        }
    }


/*3*/
    function reverseNumber(n) {
        if (isNaN(+n)) {
            return console.log("Not a number");
        }
        else if(n<10){
            return n;
        }
        else {
            const result = n%10;
            const nextNumber = (n - result) / 10;

            const str = result + reverseNumber(nextNumber).toString();

            return Number(str);
        }

    }

/*4*/


    function sum(n) {
        if (isNaN(+n)) {
            return console.log("Not a number");
        }
        else if (n < 10) {
            return n;
        }
        else {
            const result = n % 10;

            return result + sum((n - result) / 10);
        }

    }

/*5*/

    function brackets(n) {

        if(n=== 1) {
            return "()";

        }

        return `(${brackets(n - 1)})`;

    }

    