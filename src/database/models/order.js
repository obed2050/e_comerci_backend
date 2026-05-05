import { DataTypes,Model } from "sequelize";
import sequelize from "../../config/db.js";

class order extends Model{}

order.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    orderid:{
        type:DataTypes.UUID,
        allowNull:false
    },
    productid:{
        type:DataTypes.UUID,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    orderdate:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},{
    sequelize,
    modelName:"order",
    tableName:"order",
    timestamps:true
})
export default order