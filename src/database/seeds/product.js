import product from "../models/product.js";
import bcrypt from "bcrypt";

export const seedproduct=async() =>{
    const prodData =[
        {
            Name:"kamana",
            size:"34",
            price:"9000",
            type:"gan",
            description:"Nyamirambo",
            image:"c:\\Users\\ASUS\\Documents\\my pic.jpg",
            status:"available"
        },
        {
            Name:"koroda",
            size:"43",
            price:"8000",
            type:"jan",
            description:"ubay uyishaka hamagara",
            image:"c:\\Users\\ASUS\\Documents\\my pic.jpg",
            status:"available"
        }
    ];
    await product.bulkCreate(prodData,{ignoreDuplicates:true});
}
