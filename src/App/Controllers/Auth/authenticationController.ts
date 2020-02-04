import { Request, Response } from 'express';

class AuthenticationController {

    public index(req: Request, res: Response) {
        res.send('Autenticacion')
    }

}

const authenticationController = new AuthenticationController();
export default authenticationController;