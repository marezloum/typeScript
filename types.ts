const isFetching: boolean=true
const isLoading: boolean= false
const float: number=4.2
// let int: number=42
// int="" не можем довать другое значение без разниц что здесь const or let
const num:number=3e10
const message:string = "hello Typescript"
const numberArray:number[]=[1,2,3,4,5]
const numberArray2: Array<number> = [1,2,3,4,5,6,7]//в <> из чего состоит данный класс или данный объект

const words: string[]=['hello','TypeScript']
//Tuple=массив, состоящий из разных типов данных
const concat:[string,number]=['vladilen', 1234567]
//переобразовать тип данных
//Any 
// let variable =42
// variable='New string' не работает, чтобы работать добавим тип any
let variable: any=42
variable=[]
//================functions
// function sayMyName (name:string):void {//мы можем указать на возврашаюший тип данных, и когда ничего не возвращаем пишем void
    // console.log(name)
// }
// sayMyName( name:'Mina')

//never 1) когда функция возвращает нам ошибку и никогда не заканчивает своё выполнение
//2) когда она постоянно что-нибудь делает
function throwError(message:string){
    for(let i=0; i<10;i++ ){
if (i===5){
    throw new Error(message)
}
function infinite():never{
    while(true){  
    }
}
}
}
//Type- тип, который позволяет создовать свои собственные типы 
type Login = string
const Login: Login ="admin"
// const login2: Login=2 это дает ошибку, потому что у нас Login- это string
//можно и довать некоторые типы 
type ID= string | number
const id1: ID = 123
const Id2:ID = "1234"
// const id3:ID = true  в js эти типы не появляются 
//null,undefind
type SumType= string | null | undefined