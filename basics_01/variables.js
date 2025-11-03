const accountId =  12334
let accountEmail = "gaurav@gmail.com"
var accountPassword = "21313"
accountCity = "Lucknow "

accountEmail = "Sourav@gmail.com"
accountPassword = "2324121"
accountCity = "Patna"

/*
Prefer not to use var because of issue in block scope and functional scope 
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity]);
