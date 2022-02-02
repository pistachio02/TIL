// 아래는 숙제

/*
    Car 클래스를 만들고 싶습니다.

    1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
    2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
    3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
*/

class Car {
    model :string
    price :number
    constructor(a :string, b :number) {
        this.model = a,
        this.price = b
    }
    tax() :number {
        return this.price * 0.1
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300

/*
    class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

    1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
    2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
    3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
    4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
*/

class Word {
    num;
    str;
    constructor(...params) {
        let nums :number[] = [];
        let strs :string[] = [];

        params.forEach((el) => {
            if(typeof el === "number") {
                nums.push(el)
            } else if(typeof el === "string") {
                strs.push(el)
            }
        })

        this.num = nums;
        this.str = strs;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj)
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']

/*
    interface 이용해서 간단하게 타입을 만들어봅시다

    let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

    이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
    무슨 타입일지는 알아서 기입합시다. 
*/

    interface Product {
        brand : string, 
        serialNumber : number, 
        model : string[]
    }
    
    let prod :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

    console.log(prod)

/*
    array 안에 object 여러개가 필요합니다.

    쇼핑몰 장바구니를 구현하려고 하는데 

    let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
    
    이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
    오늘 배운 interface 문법을 써봅시다.
*/

    interface Cart {
        product : string,
        price : number
    }
  
    let myCart :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];
    console.log(myCart)

/*
    위에서 만든 타입을 extends 해봅시다.
    갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 

    { product : '청소기', price : 7000, card : false }

    위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/

    interface Cart {
        product : string,
        price : number
    }
    
    interface NewCart extends Cart{
        card : boolean
    }

/*
    object 안에 함수를 2개 넣고 싶은데요 

    1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
    2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

    이 object 자료를 어떻게 만들면 될까요? 
    interface를 이용해서 object에 타입지정도 해보십시오. 
*/

    interface MathObj {
        plus : (a:number, b:number) => number,
        minus : (a:number, b:number) => number
    }
    
    let newObj :MathObj = {
        plus(a,b){
        return a + b
        },
        minus(a,b){
        return a - b
        }
    } 

