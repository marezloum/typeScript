//interfaces не компилируются и им нужны только на этапе разработки
interface Rect {
  readonly id: string;
  color?: string;
  size: {
    with: number;
    height: number;
  };
}
const rect1: Rect = {
    id:'1234',
    size:{
        with:20,
        height:30
    },
    color: '#ffffff'
}
const rec2: Rect = {
    id: '12345',
    size: {
        with: 10,
        height:5
    }
// rec2.color = 'black'
}
const rec3 = {} as Rect
const rec4 = <Rect>{}//старый тип
//......................наследованиe.....

interface RectWithArea extends Rect{
    getArea:() => number
}
const rec5: RectWithArea = {
    id:'1',
    size:{
        with:20,
        height:20
    },
    getArea(): number{
        return this.size.with * this.size.height   
    }
}

//.............class............
interface IClock{
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date 
    }
}
//......................
interface Styles{
    [key: string]: string// برای اینکه هی تکرار نکنیم همه ی استایل هارو، و از اونجایی که مدلشون شبیه همه میتونیم اینجوری بنوییسیم
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadiusl: '5px'
}