import User from "../models/users.js";
import bcrypt from "bcrypt";

export const seeduser=async() =>{
    const hashpassword=await bcrypt.hash("password123",10)
    const users =[
        {
            fullName:"kamayirese",
            email:"kamayirese@gmail.com",
            phoneNumber:"0781234555",
            location:"Nyamirambo",
            gender:"male",
            role:"user",
            password:hashpassword
        },
        {
            fullName:"mugabe",
            email:"mugabe@gmail.com",
            phoneNumber:"0781334555",
            location:"kacyiry",
            gender:"male",
            role:"user",
            password:hashpassword
        },
        {
            fullName:"willy",
            email:"willy@gmail.com",
            phoneNumber:"0711111555",
            location:"remera",
            gender:"male",
            role:"user",
            password:hashpassword
        },
        {
            fullName:"ndayishimiyeobed",
            email:"ndayishimiyeobed2024@gmail.com",
            phoneNumber:"0796449412",
            location:"rebero",
            gender:"male",
            password:hashpassword,
            role:"admin"
        }
    ];
    await User.bulkCreate(users,{ignoreDuplicates:true});
}
