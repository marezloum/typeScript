const arrayOfNumbers: Array<number> = [1,1,2,3,5]
const arrayOfStrings: Array<string> = ['hello', 'hi']
function reverse<T> (array: T[]) : T[] {
    return array.reverse()
}
// как сделать, чтобы одна и таже функция работала с разными типыми данных
// и данный параметр будет пастраиваться по параметрам которые мы сдаем
reverse(arrayOfNumbers)
reverse(arrayOfStrings)
