// 아래는 숙제
/*
    숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.

    최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
    (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
    (조건2) Math.max() 사용금지 반복문이나 쓰셈
*/
function greatest() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0;
    x.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(greatest(4, 6, 3, 2));
function func1(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
func1({ user: 'kim', comment: [3, 5, 4], admin: false });
function func2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
func2([40, "wine", false]);
