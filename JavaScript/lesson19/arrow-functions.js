function fun1() {

}

const fn1 = () => {}; // fn1() - undefined


/*************************/
function fun2(a) {
    
}

const fn2 = a => {}; // fn2(8) - undefined


/*************************/
function fun3(a, b) {
    return a + b;
}

const fn3 = (a, b) => a + b; // fn3(8, 5) - 13


/*************************/
function fun4(x) {
    return x;
}

const fn4 = x => x; // fn4(10) - 10


/*************************/
function fun5() {
    console.log("banana");
}

const fn5 = () => console.log("banana"); // fn5() - console-log: banana


/*************************/
function fun6() {
    return 12;
}

const fn6 = () => 12; // fn6() - 12


/*************************/
function fun7(x) {
    console.log(x);
}

const fn7 = x => console.log(x); // fn7(88) - console-log: 88