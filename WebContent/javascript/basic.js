var num1 ; // undefined
num1 =10; //number
num1 ='hello'; // string
num1 = false; // boolean
num1 = null; // object
num1 = {
    numa : 'hong',
    age : 20
}
num1 = []; // object
num1[0] = 10;
num1[1] = 20;
 
num1 = function(){
    window.alert('hello');
 
}

let num2 =10;

{
    let num2 =20;
    console.log('{num2}' + num2);
    
}
num2 =15;
console.log('num2' + num2);

const num3 =77;
// num3 =78;




console.log(typeof num1);