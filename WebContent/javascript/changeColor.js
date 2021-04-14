let colors = ['yellow', 'red', 'blue', 'aqua'];
let i =0 ;
function chageColor(){
    // let bdy = document.getElementById('bdy'); //id값으로 가져올때
    // console.log(bdy);
    // bdy.style.backgroundColor = 'yellow';

    let bdy = document.getElementsByTagName('body'); //태그네임값으로 가져올때
    console.log(bdy[0]); // 태그네임의 1번째 값[0]
    bdy[0].style.backgroundColor = colors[i % 4]; 
    i++; 


}