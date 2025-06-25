let score = 55
console.table([typeof score])

let value = "66abc"
console.log(typeof(value))

let valueInNum = Number(value)
console.log(typeof(valueInNum))
console.log(valueInNum)

// "66" => 66
// "66abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isPassed = 0
let isPassedInBoolean = Boolean(isPassed)
console.log(isPassedInBoolean)

// 1 => true, 0 => false
// "" => false, "tiki" => true