import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Componnt yüklendi")

let logger1 = new BaseLogger
// ilgili fonks burda
let userService = new UserService(logger1)
// nesne burda
let user1 = new User(1,"engin", "demiroğ", "antalya")
let user2 = new User(2,"baran", "gökçekli", "muğla")
// kullanıcı olarak kaydılduğun yer
userService.add(user1)
userService.add(user2)
//kullanıcıları listelediğin sayfa
console.log(userService.list())
// kullanıcı bilgileri detayına gittiğin sayfa
console.log(userService.getById(2))

let customer = {id:1, firsName:"Engin"}
// prototyping sonradan değer eklenebilir js de
customer.lastName = "Demiroğ"

