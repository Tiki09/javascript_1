const accountId = 14453
let accountEmail = "tikeswari@gmail.com"
var accountPss = "12345" //prefer not to use var, because of issue in block scope
accountCity = "Bargarh"

accountEmail = "tiki@gmail.com"
accountPss = "0909"
accountCity = "sbp"

let accountState = null

console.log(accountEmail, accountPss, accountCity)
console.table([accountId, accountEmail, accountPss, accountCity, accountState])