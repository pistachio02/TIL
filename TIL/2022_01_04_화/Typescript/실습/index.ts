let Numb :string | number = 1 // 여기서 =1 을 지우면 에러가 나는걸 볼 수 있다.
console.log(Numb + 2);
console.log(Numb);

// 위에처럼 하면 에러가 나는 이유는 전에 설명했듯이 유니온타입은 타입들의 조합으로 새로운 타입을 만들어낸것이기 때문에 새로운 타입에서 숫자타입을 + 할 수가 없다. 그렇기 때문에 에러가 나는것이다.

// 아래부터는 숙제

// 숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다. 이걸 클리닝해주는 함수가 필요합니다. 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면 [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오

function cleaning(x:(string|number)[]) :number[] {
    let newArr:number[] = [];
    for(let i of x) {
        if(typeof i === "number") {
            newArr.push(i);
        } else if(typeof i === "string") {
            newArr.push(parseInt(i));
        } else {
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

function last(x:{ subject:string|string[] }) :string {
    if(typeof x.subject === 'string') {
        return x.subject;
    } else if(Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1]
    } else {
        return "없쪄";
    }
}

console.log(last( { subject : ['english', 'art'] } ));
console.log(last( { subject : 'english' } ));
console.log(last( { subject : ['english', 'art', 'sports'] } ));

// ~~~~~~~~~~

    type GegcheType = { readonly key :string };
    const obj:GegcheType = { key : "값" };
    // obj.key = '새로운값' // 앞에 있는 부분을 주석 해제하면 에러가 남 , 읽기 전용 속성이므로 key에 할당할 수 없습니다 라는 에러가 남.

// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

    type PositionX = { x : number };
    type PositionY = { /* x : string, */y : number }; // 여기 주석처리된 x 부분을 주석 해제하면 에러가 나는걸 볼 수 있다.
    type NewType = PositionX & PositionY;

    let test:NewType = { x: 1, y: 2 }
    
    console.log(test)

    // 위와같이 & 로 두가지 타입을 extend 할때 중복된 속성이 있으면 일단 콘솔에는 잘 찍히긴 하지만 TS에서 에러를 띄어준다. 실제 콘솔에는 { x: '1', y: 2 } 라고 잘 나오지만, 에러창에는 string 형식은 never 형식에 할당할 수 없습니다 라고 에러를 띄워준다.

// 다음 조건을 만족하는 타입을 만들어봅시다. 
/*
    1. 이 타입은 object 자료형이어야합니다.
    2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
    3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
    4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
    type alias로 만들어보셈 
*/

    type obj = { color? : string, size : number, readonly position : number[] }

    let newObj : obj = { size : 2, position : [ 2, 22 ] }
    console.log(newObj);

// 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
/*
    1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
    2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/

    type User = { name : string, phone : number, email : string };

    let newObj2 : User = { name : "Jung", phone : 1052550219, email : "wiaptm0219@gmail.com" }
    console.log(newObj2)

// 다음을 만족하는 type alias를 만들어보십시오.
/*
    1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
    3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
*/

    type Adult = { adult: boolean};
    type NewUser = User & Adult;

    let newObj3 : NewUser = { name : "Jung", phone : 1052550219, email : "wiaptm0219@gmail.com", adult: true };

    console.log(newObj3);

// 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
/*
    - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
    - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
    - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
*/

    type CutType = (x :string) => string

    let cutZero :CutType = function(x) {
        let result = x.replace(/^0+/, "");
        return result;
    }

    type RemoveType = (x :string) => number

    let removeDash :RemoveType = function(x) {
        let result = x.replace(/-/g, "");
        return parseInt(result);
    }

// 함수에 함수를 집어넣고 싶습니다.
/*
    위 숙제에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
    이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
    1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
    2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
    3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
    이 함수는 어떻게 만들면 될까요?
    둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

    예시?

    console.log(만들함수('010-1111-2222', cutZero, removeDash))
    콘솔창에 1011112222 가 찍히게 된다.
*/

    type newFuncType = (x: string, y:Function, z: Function) => number

    let newFunc : newFuncType = function(x, y, z) {
       return z(y(x));
    }

    console.log(newFunc('010-1111-2222', cutZero, removeDash));
    // 1011112222 이 콘솔창에 찍히게 된다.

    // 위 방법처럼 해도 되고 아래 방법처럼 해도 된다.

    type FuncType1 = (a:string) => string;
    type FuncType2 = (a:string) => number;

    function newFunc2(x:string, y: FuncType1, z: FuncType2) {
        let result1 = y(x);
        let result2 = z(result1);
        return result2;
    }

    console.log(newFunc2('010-1111-2222', cutZero, removeDash));

