import shop from "../models/shop.js";

export const seedshop=async() =>{
    const shopData =[
        {
            Name:"kamikazi",
            description:"iyi ni product nziza",
            contact:"0781234555",
            owner:"Habiman",
            location:"busanza"
        },
        {
            Name:"kamariza",
            description:"iyi product irarenze",
            contact:"0781234445",
            owner:"Nyiramana",
            location:"gikondo"
        },
        {
            Name:"nkurunziza",
            description:"muraho neza",
            contact:"0781234355",
            owner:"Nyirimana",
            location:"rebero"
        },
    ];
    await shop.bulkCreate(shopData,{ignoreDuplicates:true});
}
