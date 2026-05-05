import { DataTypes,Model } from "sequelize";
import sequelize from "../../config/db.js";

class product extends Model{}

product.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    size:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"gabo"
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM("available", "hold_in_stock"),
        defaultValue:"available"
    }


},{
    sequelize,
    modelName:"product",
    tableName:"product",
    timestamps:true
})
export default product