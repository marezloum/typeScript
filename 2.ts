// interface shoe{
//   id:number;
//   size:number;
//   color:string;
//   price:number;
// }

// interface category{
//   name:string;
//   shoes:shoe[];
// }
// //создание объекта products

// const products: category[]= [
//   {
//     name:"обувь",
//     shoes:[
//       {id:1, size:40, color:"black", price:500},
//       {id:2, size:41, color:"red", price:400},
//       {id:3, size:39, color:"green", price:300},
//     ]
//   }
// ]

// function addShoe(categoryName:string, newShoe:shoe):void {
//   const category= products.find(cat=> cat.name=== categoryName);
//   if(category)
//     {
//     category.shoes.push(newShoe);
//     } 
//     else{
//       console.log("Категория не найдена!")
//     }
//   }
//   function findShoeById (id: number): shoe | undefined {
//     for (const category of products){
//       const shoe = category.shoes.find(shoe=> shoe.id===id);
//       if(shoe){
//         return shoe;
//       }
//     }
//     return undefined;
//   }
// const newShoe: shoe = {id:4, size:41, color:"red", price:400};
// addShoe ("обувь",newShoe);

// const foundShoe= findShoeById(2);
// console.log(foundShoe);

// //2.	Реализуйте итератор для объекта products для доступа к каждому товару.
// class ShoeIterator{
//   private shoes: shoe[];
//   private currentIndex:number=0;

//   constructor(categories: category[]){
//     this.shoes=categories.flatMap(category=>category.shoes);
//   }
//   public next():shoe| null{
//     if (this.currentIndex< this.shoes.length){
//       return this.shoes[this.currentIndex++];
//     }
//     return null;
//   }
//   public hasNext():boolean{
//     return this.currentIndex < this.shoes.length;
//   }
// }

// const shoeIterator = new ShoeIterator (products);
// while(shoeIterator.hasNext()){
//   const shoe= shoeIterator.next();
//   if(shoe){
//     console.log(`ID: ${shoe.id}, Size: ${shoe.size}, Color: ${shoe.color}, Price: ${shoe.price}`)
//   }
// }
// //filter

// function filterShoes(
//   categoryName: string,
//   minPrice: number,
//   maxPrice: number,
//   size: number,
//   color: string
// ): number[] {
//   const category = products.find((cat) => cat.name === categoryName);
//   if (!category) {
//     console.log("Категория не найдена!");
//     return [];
//   }

//   return category.shoes
//     .filter(
//       (shoe) =>
//         shoe.price >= minPrice &&
//         shoe.price <= maxPrice &&
//         shoe.size === size &&
//         shoe.color === color
//     )
//     .map((shoe) => shoe.id);
// }
// // Пример использования фильтра
// const filteredShoeIds = filterShoes("обувь", 300, 500, 41, "red");
// console.log(filteredShoeIds); // Вывод: [2]


// // // Оптимизация
// // interface Shoe {
// //   id: number;
// //   size: number;
// //   color: string;
// //   price: number;
// // }

// // interface Category {
// //   name: string;
// //   shoes: Shoe[];
// // }

// // const products: Category[] = [
// //   {
// //     name: "обувь",
// //     shoes: [
// //       { id: 1, size: 40, color: "black", price: 500 },
// //       { id: 2, size: 41, color: "red", price: 400 },
// //       { id: 3, size: 39, color: "green", price: 300 },
// //     ],
// //   },
// // ];

// // let nextId = 4; // Уникальный идентификатор для новых обувей

// // class ShoeFactory {
// //   static createShoe(size: number, color: string, price: number): Shoe {
// //     const newShoe: Shoe = {
// //       id: nextId++,
// //       size,
// //       color,
// //       price,
// //     };
// //     return newShoe;
// //   }
// // }

// // function addShoe(categoryName: string, size: number, color: string, price: number): void {
// //   const category = products.find((cat) => cat.name === categoryName);
// //   if (category) {
// //     const newShoe = ShoeFactory.createShoe(size, color, price);
// //     category.shoes.push(newShoe);
// //   } else {
// //     console.log("Категория не найдена!");
// //   }
// // }

// // function findShoeById(id: number): Shoe | undefined {
// //   for (const category of products) {
// //     const shoe = category.shoes.find((shoe) => shoe.id === id);
// //     if (shoe) {
// //       return shoe;
// //     }
// //   }
// //   return undefined;
// // }

// // // Пример добавления обуви
// // addShoe("обувь", 41, "red", 400);
// // addShoe("обувь", 40, "blue", 600);

// // // Вывод всех товаров
// // const foundShoe = findShoeById(2);
// // console.log(foundShoe);

// // // Итератор для объекта products
// // class ShoeIterator {
// //   private shoes: Shoe[];
// //   private currentIndex: number = 0;

// //   constructor(categories: Category[]) {
// //     this.shoes = categories.flatMap((category) => category.shoes);
// //   }

// //   public next(): Shoe | null {
// //     if (this.currentIndex < this.shoes.length) {
// //       return this.shoes[this.currentIndex++];
// //     }
// //     return null;
// //   }

// //   public hasNext(): boolean {
// //     return this.currentIndex < this.shoes.length;
// //   }
// // }

// // const shoeIterator = new ShoeIterator(products);
// // while (shoeIterator.hasNext()) {
// //   const shoe = shoeIterator.next();
// //   if (shoe) {
// //     console.log(`ID: ${shoe.id}, Size: ${shoe.size}, Color: ${shoe.color}, Price: ${shoe.price}`);
// //   }
// // }

// // // Функция фильтрации
// // function filterShoes(
// //   categoryName: string,
// //   minPrice: number,
// //   maxPrice: number,
// //   size: number,
// //   color: string
// // ): number[] {
// //   const category = products.find((cat) => cat.name === categoryName);
// //   if (!category) {
// //     console.log("Категория не найдена!");
// //     return [];
// //   }

// //   return category.shoes
// //     .filter(
// //       (shoe) =>
// //         shoe.price >= minPrice &&
// //         shoe.price <= maxPrice &&
// //         shoe.size === size &&
// //         shoe.color === color
// //     )
// //     .map((shoe) => shoe.id);
// // }

// // // Пример использования фильтра
// // const filteredShoeIds = filterShoes("обувь", 300, 500, 41, "red");
// // console.log(filteredShoeIds); // Вывод: [2]