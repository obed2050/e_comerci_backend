import order from "../models/order.js";

export const seedorder=async() =>{
    const orderData =[

    ];
    await order.bulkCreate(orderData,{ignoreDuplicates:true});
}
