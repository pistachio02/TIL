let 이름 :string = "Jung";

이름 = "Jung"

// 위와같이 변수 만들때 타입 지정을 조금 더 자세하게 해주는것이 가능하다.
// 이름 = 123 으로 해주게 되면 123 은 숫자이고 위에서 설정해놓은 타입(string)이 아니기 때문에 에러를 나타낸다.

let 이름2 :string[] = ['kim', 'park']

let 나이 :{ age : number } = { age : 31 }

// 배열과 객체는 각각 위처럼 타입을 설정해줄 수 있다.

function 함수명(x :number) :number{
    return x * 2
}

// 위처럼 해주면 함수에 대한 타입 지정도 가능한데, 함수의 인자로 오는 값의 타입을 number 로, 그리고 return 값의 타입을 number 로 설정해주는 것이다.

// 숙제는 아래에 풀어보자.

// 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 

let Name:string = "정종화";
let Age:number = 31;
let Nationality:string = "South Korea";

// 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.

let Favorite: { PSY:string } = { PSY: "벌써 이렇게"};
// 아래처럼 다르게 해도 됨
let 최애가수그리고곡: { 곡:string, 가수:string} = { 곡: "벌써 이렇게", 가수: "싸이"};

// 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

let project:{ member :string[], days :number, started :boolean, } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

// 다음 변수 4개에 타입을 지정해봅시다.

let user:string = 'kim';
let age:(undefined | number) = undefined;
let married:boolean = false; 
let 철수:(string | undefined | number | boolean)[] = [user, age, married];

// 학교라는 변수에 타입지정해보십시오.

let 학교:{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다. 파라미터와 return 타입지정도 잘 해봅시다. 

function hello(x?:string) :void {
    if (x) {
        console.log('안녕하세요 ' + x)
      } else {
        console.log('이름이 없습니다')
      }
}

// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

function count(x:string | number) :number {
    return x.toString().length;
}

// 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

function 결혼가능하냐(money :number, house :boolean, charm :string) :string | void {
    let score :number = 0;
    score += money;
    if(house === true){
      score += 500
    }
    if(charm === '상'){
      score += 100
    }
    if(score >= 600){
      return '결혼가능'
    } 
}
