//когда существует однотипные элементы можем использовать enum
//دو مدل نوشتن داره
enum MemberShip {
simple,
standard,
premium
}
const memberShip = MemberShip.standard
const memberShipReverse = MemberShip[2]
console.log(memberShip)
console.log(memberShipReverse)