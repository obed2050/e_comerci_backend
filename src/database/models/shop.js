import { DataTypes,Model } from "sequelize";
import sequelize from "../../config/db.js";

class shop extends Model{}

shop.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    contact: {
        type: DataTypes.STRING,
        allowNull:false
    },
    owner:{
        type:DataTypes.STRING,
        allowNull:false
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{
    sequelize,
    modelName:"shop",
    tableName:"shop",
    timestamps:true
})
export default shop