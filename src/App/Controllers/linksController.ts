import { Request, Response } from 'express';

class LinksController {

    public index(req: Request, res: Response) {
        console.log('links')
        res.send('Links');
    }

}

const linksController = new LinksController();
export default linksController;