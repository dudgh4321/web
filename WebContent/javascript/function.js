      // 정의문
      let result = square(3);

      function square(num) {
          if (num == null) {
              return 0;
          } else if (isNaN(num)) {
              return 0;
          }
          return num * num;
      }
      // 표현식
      let fnc = function (num) {
          if (num == null) {
              return 0;
          } else if (isNaN(num)) {
              return 0;
          }
          return num * num;
      }
      console.log(fnc(3));

      //
      let count = 0;

      function myFnc() {
          let cnt = 0;
          count++;
          document.write(count + '<br>')
      }
      myFnc();

      let theFnc = function () {
          let cnt = 0;
          count++;
          cnt++

          document.write(count + '<br>')
      }
      theFnc();
// function 매개값으로 function
      function map(func,ary){
        let result = [];
        for(let i = 0; i<arr.length; i++){
            result[i] = func(ary[i]);
        }
        return result;
    }
    let arr = [0,1,2,4];
    function fun(x) {
        return x * x ;
    } 
    let result= map(fun,arr);
    console.log(result);

// 매개변수를 정하지 않는 함수
    function callFunc() {
        let sum =0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    console.log(callFunc(1,2,3,4,5,6,7,8,9,10));
    
    function callArySum(arr) {
        let sum =0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    let aryy = [1,2,3,4,5,6,7,8,9,10];
    console.log(callArySum(aryy));

    //재귀함수
    let factorial = function (num) {
      return num < 2 ? 1: num * factorial(num-1)  

    }
    result = factorial(3);
    console.log(result);

    // 함수안에 함수사용
    function outside(x){
        function inside(y) {
            return x+y ;
        }
        return inside;
    }
    let fn_inside = outside(2);
    let res = fn_inside(3)
    console.log(res);        
    
    let fn = outside(2);
    let res1 = fn_inside(3);
    console.log(res1);        
    
    let res2 = outside(2)(3);
    console.log(res2);        
