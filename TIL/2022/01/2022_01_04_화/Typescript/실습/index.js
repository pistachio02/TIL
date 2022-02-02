var Numb = 1; // 여기서 =1 을 지우면 에러가 나는걸 볼 수 있다.
console.log(Numb + 2);
console.log(Numb);
// 위에처럼 하면 에러가 나는 이유는 전에 설명했듯이 유니온타입은 타입들의 조합으로 새로운 타입을 만들어낸것이기 때문에 새로운 타입에서 숫자타입을 + 할 수가 없다. 그렇기 때문에 에러가 나는것이다.
// 아래부터는 숙제
// 숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다. 이걸 클리닝해주는 함수가 필요합니다. 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면 [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오
function cleaning(x) {
    var newArr = [];
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var i = x_1[_i];
        if (typeof i === "number") {
            newArr.push(i);
        }
        else if (typeof i === "string") {
            newArr.push(parseInt(i));
        }
        else {
            continue;
        }
    }
    return newArr;
}
console.log(cleaning([1, "2", 3]));
console.log(cleaning(["4", 5, "6"]));
// 다음과 같은 함수를 만들어보십시오.
/*
    let 철수쌤 = { subject : 'math' }
    let 영희쌤 = { subject : ['science', 'english'] }
    let 민수쌤 = { subject : ['science', 'art', 'korean'] }

    지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.

    과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
    과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

    철수쌤같은 선생님 object 자료를 집어넣으면
    그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
    그리고 타입지정도 엄격하게 해보도록 합시다.

    예시는 아래와 같다.

    만들함수( { subject : 'math' } )  //이 경우 'math'를 return
    만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
    만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
*/
function last(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없쪄";
    }
}
console.log(last({ subject: ['english', 'art'] }));
console.log(last({ subject: 'english' }));
console.log(last({ subject: ['english', 'art', 'sports'] }));
var obj = { key: "값" };
var test = { x: 1, y: 2 };
console.log(test);
var newObj = { size: 2, position: [2, 22] };
console.log(newObj);
var newObj2 = { name: "Jung", phone: 1052550219, email: "wiaptm0219@gmail.com" };
console.log(newObj2);
var newObj3 = { name: "Jung", phone: 1052550219, email: "wiaptm0219@gmail.com", adult: true };
console.log(newObj3);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseInt(result);
};
var newFunc = function (x, y, z) {
    return z(y(x));
};
console.log(newFunc('010-1111-2222', cutZero, removeDash));
function newFunc2(x, y, z) {
    var result1 = y(x);
    var result2 = z(result1);
    return result2;
}
console.log(newFunc2('010-1111-2222', cutZero, removeDash));
