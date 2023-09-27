import { Employee } from '../models/Employee_Model';


export  async function  getAncestors(id:string):Promise<any[]>{

    try{
        const user = await Employee.findOne({ where: { empId: id } });

        console.log(user?.dataValues);
        
        if(user?.dataValues.managerId===null){
            return [user?.dataValues]
        }
        else{
            const users = await getAncestors(user?.dataValues.managerId);
            users.push(user?.dataValues)
            return users
        }

    }catch(error){
        console.log("Error in getAncestors");
        return [error];
    }

}


export async function getDescendants(id:string){

    try{
        const arr = []
        const user = await Employee.findAll({where:{managerId:id}});
        console.log("Descendants", user)
        for(let i of user){
            arr.push(i.dataValues);
            // console.log("Ith",i.dataValues)
        }
        // console.log(arr);
        return arr;
    }catch(error){
        console.log("Error in getDescendants");
        return [error]
    }
}



