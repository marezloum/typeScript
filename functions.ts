function add (a: number, b: number): number {
return a+b
}
function toUpperCase (str: string): string {
    return str.trim().toUpperCase()
}
interface MyPosition{
    x: Number | undefined
    y: Number | undefined
}

interface MyPositionDefault extends MyPosition{
 default: string
}
function position(): MyPosition
function position (a:number): MyPositionDefault
function position (a:number, b:number): MyPosition

//حالا خود فانکشن رو چطور تعریف کنیم

function position(a?: number, b?: number){//بعدش реализация میکنیم
if (!a && !b){
    return {x: undefined, y: undefined}
}
if(a && !b){
return { x: a, y: undefined, default: a.toString()}//undefind الان تایپ نیست وпереманная
}
return {x: a, y:b}
}
console.log(position())
console.log(position(a:42))
console.log(position(a:42, b: 15))
