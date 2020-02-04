import { Router } from "express";
import linksController from "../../Controllers/Links/linksController";

class LinksRouter {

    public router: Router;

    constructor() {
        this.router = Router()
        this.config();
    }

    private config(): void {
        this.router.get('/links', linksController.index);
    }

}

const linksRouter = new LinksRouter();
export default linksRouter.router;