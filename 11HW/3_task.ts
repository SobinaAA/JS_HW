// Создайте систему типов и интерфейсов для управления заказами в интернет-магазине.
// Создайте интерфейсы для:
//     - Product: товар с полями id (число), name (строка), price (число), и опциональным полем discount (число).
//     - Customer: клиент с полями id (число), name (строка), и email (строка).
//     - OrderItem: элемент заказа с полями product (тип Product), quantity (число).
//     - Order: заказ с полями id (число), customer (тип Customer), 
//       items (массив типа OrderItem), и опциональным полем status (литерал типа 'pending' | 'shipped' | 'delivered').
// Напишите функцию calculateTotal, которая принимает объект типа Order 
// и возвращает общую сумму заказа с учетом возможных скидок.
// Если у товара есть скидка, то она должна учитываться при расчете суммы.
// Сумма заказа вычисляется как сумма цен всех товаров, умноженная на количество каждого товара в заказе.
export {};
interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number;
  }  
interface Customer {
    id: number;
    name: string;
    email: string;
  }  
interface OrderItem {
    product: Product;
    quantity: number;
  }  
interface Order {
    id: number;
    customer: Customer;
    items: OrderItem[];
    status?: 'pending' | 'shipped' | 'delivered';
  }  

const product1: Product = {
    id: 1,
    name: "Смартфон",
    price: 500,
};

const product2: Product = {
    id: 2,
    name: "Ноутбук",
    price: 1000
};

const product3: Product = {
    id: 3,
    name: "Наушники",
    price: 100,
    discount: 20 
};

const customer: Customer = {
    id: 1,
    name: "Алена",
    email: "alena@js-ts.com"
};

const orderItems: OrderItem[] = [
    {
        product: product1,
        quantity: 2
    },
    {
        product: product2,
        quantity: 2
    },
    {
        product: product3,
        quantity: 2
    }
];

const order: Order = {
    id: 1,
    customer: customer,
    items: orderItems,
    status: 'pending' 
};

console.log(calculateTotal(order));

function  calculateTotal(order: Order): number {
    return order.items.reduce((result: number, position) => {
        const sumPosition: number = position.product.discount ? 
        (position.product.price - position.product.price * (position.product.discount/100)) * position.quantity :
        position.product.price * position.quantity;
        result += sumPosition;
        return result;         
    }, 0)
}
