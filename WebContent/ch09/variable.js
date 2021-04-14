//variabel.js
var num1 = 10;
var num2 = 20;
console.log(typeof num1);
num1 = '10';
num2 = '20';
console.log(typeof num1);
num1 = 10.5
console.log(typeof num1);
var num3 = null;
num3 = {
    name: 'hong',
    age: 20
}
console.log(typeof num3);
console.log(num3.age);
console.log(num3.name);
num3 = true;
console.log(typeof num3);

var result = parseInt(num1) + parseInt(num2);
var result1 = num1 + num2;
console.log(result);
console.log(result1);

numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
result = 0;
for(var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    result += numbers[i];
}
console.log('합계: ' +result)

// document.write('<table border="1">');
// for(var i=1; i<10; i++){
    // console.log('2 * ' + i + '=' + (2*i));
    // document.write('2 * ' + i + '=' + (2*i) + '<br>');
//     document.write('<tr> <td > 2 * ' + i + '</td>');
//     document.write('<td class="equals"> = </td>');
//     document.write('<td>'+(2*i)+ '</td></tr>');
// }
// document.write('</table>');

// var n1 = window.prompt('첫번째 값을 입력하세요.');
// var n2 = window.prompt('두번째 값을 입력하세요.');
// console.log(parseInt(n1)+parseInt(n2));
// console.log(n1);

document.write('<table border="1">');
// var n1 = window.prompt('첫번째 값을 입력하세요.');
for(var i=1; i<10; i++){
    document.write('<tr> <td >' + n1 + ' * ' + i + '</td>');
    document.write('<td class="equals"> = </td>');
    document.write('<td>'+(n1*i)+ '</td></tr>');
}
document.write('</table>');