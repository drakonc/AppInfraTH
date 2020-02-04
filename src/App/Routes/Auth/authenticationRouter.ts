import { Router } from "express";
import authenticationController from "../../Controllers/Auth/authenticationController";

class AuthenticationRoute {

    public router: Router;

    constructor() {
        this.router = Router()
        this.config();
    }

    private config(): void {
        this.router.get('/auth', authenticationController.index);
    }

}

const authenticationRoute = new AuthenticationRoute();
export default authenticationRoute.router;