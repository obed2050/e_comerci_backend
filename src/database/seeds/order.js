import order from "../models/order.js";

export const seedorder=async() =>{
    const orderData =[
        {
            orderid:"3",
            productid:"2",
            status:"in stock",
            orderdate:"02/04/2026",
            price:20000,
            quantity:4
        },
        {
            orderid:"4",
            productid:"5",
            status:"in hold",
            orderdate:"04/03/2026",
            price:2000,
            quantity:5
        },
        {
            orderid:"6",
            productid:"6",
            status:"sold",
            orderdate:"06/04/2026",
            price:20000,
            quantity:9
        },
    ];
    await order.bulkCreate(orderData,{ignoreDuplicates:true});
}
