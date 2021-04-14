var userEmail = prompt("당신의 이메일 주소는?", "");
var arrUrl = [".co.kr", ".com", ".net", ".or.kr", "go.kr"]

var chk1 = false;
var chk2 = false;

if(userEmail.indexOf("@")>0){
    chk1 = true;
}

for(let i = 0; i<arrUrl.length; i++){
    if(arrUrl.indexOf(arrUrl[i])>0){
        chk2 = true;
    }
}

if(chk1 && chk2) {
    document.write(userEmail);
}else{
    alert("이메일 형식이 잘못되었습니다.")
}

