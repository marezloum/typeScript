class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info (name: string){
    return `[${name}]: Typescript version is ${this.version}`
  }
}
//эти применные будут не перезаписны в ходе работы
// class Car{
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string){
// this.model= theModel
//     }
// }
//мы можем переписать функцию readOnly только внутри конструктора

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){
    }
}
//................... что такое модификатор? бывает 3 типа модификатора
// protecteed
//public
//private
class Animal {
protected voice: string = ''
public color: string = 'black'//public is default, even if not write it
private go(){
  console.log('go')
}
}
class Cat extends Animal{
  public setVoice(voice: string): void{
    this.voice =voice
  }
}
const cat = new Cat()//ولی اینجا نمیبینیمش چون پروتکتد بوده
//когда мы задаем модификатор protected для определенных свойств значит они могут быть доступны в классе Animal И во всех классах которык наследуются от animal
//private только доступны в том классе в котором они определены
cat.setVoice('test')
console.log(cat.color)
//cat.voice

//.......abstract class....
abstract class Component {
  abstract render():void
  abstract info(): string
}
class AppComponent extends Component {
render(): void {
console.log('Component on render')
}
info(): string {
  return 'this is info';
}
}