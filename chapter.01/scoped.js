/*
    변수 선언의 기본적인 Scoping(변수의 유효 범위 선언) 요소
*/
var apple = 1               // 전역
let banana = 2               // 블럭
// 상수
const cherry = '문자열의 연결은 \
                이렇게도 할 수 있습니다 \
                편리 한것 같지만'
// 템플릿 리터럴
const temp = `템플릿 리터럴을 사용하면
            역슬레시가 필요 없어 집니다.
            더욱 편리하죠
            심지어 줄 내림 까지 인식 됩니다`

function var_test() {
    apple++
    banana--
    var eclipse = 5
    console.log('function', apple, banana, eclipse, foo)
}

var_test()

if (apple === 2) {
    apple *= 2
    banana -= 2
    let durian = 10
    var foo = 5
    console.log('if', apple, banana, durian, foo)
}

var_test()


console.log('result', `${apple}, ${banana}, ${foo}`, cherry, temp)
