interface Person {
    name: string
    age: number
}
type PersonKeys = keyof Person // 'nme' | 'age'
let key: PersonKeys = 'name'
Key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1= Exclude<keyof User, '_id'|'createAt'> //'name' | 'email'
//другрй запись для создания подобного интрерфейса
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>
// создаем пременные

let u1 = 'name'
u1 = '_id'
