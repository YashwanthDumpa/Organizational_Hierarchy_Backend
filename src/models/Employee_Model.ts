  // src/models/User.ts
  import { Model, DataTypes, Sequelize  } from 'sequelize';
  const sequelize = require("../database/sequelize")
  
  
  class Employee extends Model {
    public empId!: string;
    public firstName!: string;
    public lastName!: string;
    public employeeEmail!: string;
    public managerId!:string| null;
  
  }
  Employee.init(
    {
     empId: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      
      employeeEmail: {
        type: DataTypes.STRING,
        unique:true
      },
      managerId: {
        type: DataTypes.STRING,
        allowNull: true, // Assuming NULL means the CEO (no manager)
      },
      position: {
        type: DataTypes.STRING,
       
      },
  
    },
    {
      tableName:'Employee_Data',
      timestamps: false,
      sequelize,
    }
  );



  
export { Employee };