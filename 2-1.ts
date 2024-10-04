interface Product {
    id: number;
    размер: string;
    цвет: string;
    цена: number;
    скидка?: number;
    "стоимость товара"?: number;
    конечнаяСтоимость?: number; // Новое свойство
  }
  
  interface Category {
    [key: string]: Product[];
  }
  
  interface Products {
    Обувь: Category;
  }
  
  // Исходные данные
  const products: Products = {
    Обувь: {
      Ботинки: [
        { id: 1, размер: "42", цвет: "черный", цена: 1000 },
        { id: 2, размер: "40", цвет: "белый", цена: 900 },
      ],
      Кроссовки: [
        { id: 3, размер: "43", цвет: "синий", цена: 800 },
        { id: 4, размер: "41", цвет: "зеленый", цена: 700 },
      ],
      Сандалии: [
        { id: 5, размер: "39", цвет: "красный", цена: 600 },
        { id: 6, размер: "38", цвет: "фиолетовый", цена: 500 },
      ],
    },
  };
  
  console.log(products);
  
  // Функция фильтрации продуктов
  function filterProducts(
    products: Products,
    priceRange: [number, number],
    size?: string,
    color?: string
  ): number {
    let filteredProducts: Product[] = [];
  
    for (let category in products) {
      for (let type in products[category]) {
        filteredProducts = filteredProducts.concat(
          products[category][type].filter((item) => {
            return (
              priceRange[0] <= item.цена &&
              item.цена <= priceRange[1] &&
              (size ? item.размер === size : true) &&
              (color ? item.цвет === color : true)
            );
          })
        );
      }
    }
    return filteredProducts.length;
  }
  
  // Пример использования функции
  console.log(filterProducts(products, [500, 1000], "40", "синий"));
  
  // Продукты с учетом скидки
  const products3: Products = {
    Обувь: {
      Ботинки: [
        { id: 1, размер: "42", цвет: "черный", цена: 800, скидка: 20 },
        { id: 2, размер: "40", цвет: "белый", цена: 750, скидка: 15 },
      ],
      Кроссовки: [
        { id: 3, размер: "43", цвет: "синий", цена: 650, скидка: 25 },
        { id: 4, размер: "41", цвет: "зеленый", цена: 600, скидка: 30 },
      ],
      Сандалии: [
        { id: 5, размер: "39", цвет: "красный", цена: 500, скидка: 20 },
        { id: 6, размер: "38", цвет: "фиолетовый", цена: 450, скидка: 10 },
      ],
    },
  };
  
  // Функция для расчета цены товара с учетом скидки
  function calculatePrice(product: Product): number {
    const cost = product["стоимость товара"] || 0;
    const discount = product.скидка || 0;
    return cost - cost * (discount / 100);
  }
  
  // Пример использования функции для расчета цены товара
  for (let category in products3) {
    for (let type in products3[category]) {
      products3[category][type].forEach((product) => {
        product.цена = calculatePrice(product);
      });
    }
  }
  
  console.log(`Цена товара с учетом скидки: ${JSON.stringify(products3)}`);
  
  const product = {
    "уникальный номер продукта": 1,
    цена: 1000,
  };
  
  Object.defineProperty(product, "цена", {
    writable: false,
    configurable: false,
  });
  
  Object.defineProperty(product, "уникальный номер продукта", {
    configurable: false,
  });
  
  console.log(product);
  
  // Интерфейс для класса Обувь
  interface Shoe extends Product {
    конечнаяСтоимость: number;
  }
  
  // Класс Обувь
  class Обувь implements Shoe {
    id: number;
    размер: string;
    цвет: string;
    цена:number;
    "стоимость товара": number;
    private _скидка: number;
  
    constructor(
      number: number,
      size: string,
      color: string,
      cost: number,
      discount: number
    ) {
      this.id = number;
      this.размер = size;
      this.цвет = color;
      this["стоимость товара"] = cost;
      this._скидка = discount;
    }
  
    // Геттер для конечной стоимости
    get конечнаяСтоимость(): number {
      return this["стоимость товара"] - this["стоимость товара"] * (this._скидка / 100);
    }
  
    // Сеттер для скидки
    set скидка(value: number) {
      this._скидка = value;
    }
  
    // Сеттер для конечной стоимости
    set конечнаяСтоимость(value: number) {
      const originalPrice = this["стоимость товара"];
      // Вычисляем новую скидку на основе конечной стоимости
      this._скидка = ((originalPrice - value) / originalPrice) * 100;
    }
  
    // Метод для получения текущей скидки
    get скидка(): number {
      return this._скидка;
    }
  }
  
  // Пример использования
  const shoe1 = new Обувь(1, "42", "черный", 800, 20);
  console.log(`Конечная стоимость: ${shoe1.конечнаяСтоимость}`); // Вывод конечной стоимости
  
  shoe1.скидка = 30; // Устанавливаем новую скидку
  console.log(`Обновленная скидка: ${shoe1.скидка}`); // Вывод обновленной скидки