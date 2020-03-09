/*
    ES5 에서 추가된 몇가지 배열 함수 예시
*/

// trim 함수는
let str = ` 문자열에 Trim을 사용하여 앞뒤 공백을 제거 할 수 있습니다.
            물론 줄 내려 쓰기도 제거 됩니다.
            `
console.log('trim', str.trim())

const ary =  ['apple', 'banana', 'cherry', 'durian', 'eclips']

console.log('isArray', Array.isArray(ary))

ary.forEach(function(v) {
    console.log('forEach', v)
})

const ary1 = ary.map(function(item) {
    return item + '_1'
})

console.log('map', ary1)

const ary2 = ary.filter(function(item) {
    return item.indexOf('a') > -1
})

console.log('filter', ary2)

// reduceRight
const result1 = ary.reduce(function(total, next, index, array) {
    console.log('reduce in', total, next, index, array)
    return total
})

console.log('reduce', result1, Array.isArray(result1))

const result2 = ary.every(function(value, index, array) {
    console.log('every in', value, index, array)
    return value.indexOf('c') > -1
})

console.log('every', result2)


const result3 = ary.some(function(value, index, array) {
    console.log('some in', value, index, array)
    return value.indexOf('f') > -1
})

console.log('some', result3)

// lastIndexOf
console.log(ary.indexOf('banana'))