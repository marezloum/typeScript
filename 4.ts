interface Person{
    id: number;
    name: string;
    group: number;
}
const array: Person[]=[
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira',  group: 11 },
    // { id: 6, name: 'Mina',    group: 9}
]

interface CarsType{
    manufacture: string;
    model: string;
}

interface arrayCarsType{
    cars: CarsType[];
}
//cars — это массив объектов типа CarsType.

let car1: CarsType = {
    manufacture: "manufacturer",
    model: "model"
};

const car2: CarsType={
    manufacture:"manufacture2",
    model:"model2"
}

const arrayCars: Array<arrayCarsType> = [
    {
        cars: [car1,car2]
    }
]

type MarkFilterType= 1|2|3|4|5|6|7|8|9|10;
type GroupFilterType= 1|2|3|4|5|6|7|8|9|10|11|12;
type DoneType =boolean; //status

type MarkType={
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
}
type StudentType = {
id:number,
name: string,
group: GroupFilterType,
marks: Array <MarkType>
}
interface groupType {
    students: Array <StudentType>;
    studentsFilter:(group: number) => Array <StudentType>; //filter in group
    marksFilter: (mark: number) => Array<StudentType>;
    deleteStudents: (id: number) => void; 
    addStudents: (student: StudentType) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
}

//realisation

class Group implements groupType {
    students: Array<StudentType> = [];
    mark: MarkFilterType;
    group: GroupFilterType;

    constructor(group: GroupFilterType) {
        this.group = group;
    }

    studentsFilter(group: number): Array<StudentType> {
        return this.students.filter(student => student.group === group);
    }

    marksFilter(mark: number): Array<StudentType> {
        return this.students.filter(student =>
            student.marks.some(m => m.mark === mark)
        );
    }

    deleteStudents(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    }

    addStudents(student: StudentType): void {
        this.students.push(student);
    }
}

const group1 = new Group(1);
group1.addStudents({id:1, name: 'Mina', group: 1, marks: [{subject: 'math', mark : 9, done: true}]});
group1.addStudents({id: 2, name: 'Polina', group: 1, marks: [{subject:'math', mark: 8, done: true}]});

console.log(group1.studentsFilter(1));// вывод всех студентов группы 1
console.log(group1.marksFilter(9));//выводит студентов с оценкой 9
group1.deleteStudents(1);// удаляет студенита с id 1
console.log(group1.students); // выводит оставшихся студентов