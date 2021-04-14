let names = []; 
names[0] = 'hong';
names.push("임성원") // 제일마지막 인덱스 위치에 데이터 저장
names.push("김영호") 
names.unshift('도왕락')// 첫번째 인덱스 위치에 데이터 저장

delete names[0]; // 삭제 후 빈칸으로 인덱스 번호가 남음
names.pop(); // 제일 뒤쪽 인덱스 데이터삭제 삭제후 인덱스 이동
names.shift(); // 제일 앞쪽 인덱스 데이터 삭제

for(let i=0; i<names.length; i++){
    console.log(i, names[i]);
}

let ns =names.join(',');
console.log(ns)

ns = names.reverse();
console.log(ns);
ns = names.reverse();
console.log(names);

names.push('김민주');

ns = names.slice(1,2) // 원본을 그대로 두고  
console.log(ns);
console.log(names);