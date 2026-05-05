import {createuserTable}from "../database/migrations/users.js";
import {createproductTable}from "../database/migrations/product.js";
import {createshopTable}from "../database/migrations/shop.js";
import {createorderTable}from "../database/migrations/order.js";
import {createNotificationTable}from "../database/migrations/notification.js";
import {seeduser}from "../database/seeds/users.js";
import {seedproduct}from "../database/seeds/product.js";
import {seedshop}from "../database/seeds/shop.js";
import {seedorder}from "../database/seeds/order.js";
import {seednotification}from "../database/seeds/notification.js";


const runseed = async() =>{
    try{

        await createuserTable();
        await seeduser();
        await createproductTable();
        await seedproduct();
        await createshopTable();
        await seedshop();
        await createorderTable();
        await seedorder();
        await createNotificationTable();
        await seednotification();
        console.log("seeds data inserted successfully");
        process.exit(0)

     }
    catch (error){
        console.error("failed to seed users",error)
        
    }
};
runseed();