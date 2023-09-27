// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { Employee } from '../models/Employee_Model';

import {getAncestors, getDescendants} from '../functions/getAncestors';



const { Op } = require('sequelize')
const url = require('url')
const dotenv = require('dotenv')
dotenv.config()




class UserController {
  public async getData(req: Request, res: Response) {
    try { 
      const { id } = req.params;
      console.log(id);
      const ancestors = await getAncestors(id);
      const descendants = await getDescendants(id)
      console.log("Ancestors from userController",ancestors);
      console.log("Descendants from userController",descendants);
      res.status(200).send({ancestors, descendants});
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw error;
    }
  }
}

export const userController = new UserController();