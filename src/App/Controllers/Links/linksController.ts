import { Request, Response } from 'express';
import mysql from "../../Config/database";
//const mysql = require("../Config/database");

class LinksController {

    public async index(req: Request, res: Response) {
        const links = await mysql.query("SELECT * FROM links");
        console.log(links);
        res.send('Links');
    }

}

const linksController = new LinksController();
export default linksController;