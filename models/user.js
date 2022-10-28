const { Model, DataTypes } = require('sequelize');
const bcrypt=require('bcrypt');
const sequelize = require('../config/connect.js');

class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw,this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
    },
    {
        hooks:{
            beforeCreate: async (userPass)=> {
                userPass.password=await bcrypt.hash(userPass.password,10);
                return userPass
            },  
            beforeUpdate: async(updatePass)=>{
                updatePass.password=await bcrypt.hash(updatePass.password,10);
                return updatePass
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',

    }
)

module.exports = User;