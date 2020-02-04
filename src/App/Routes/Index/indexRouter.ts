import { Router } from "express";
import indexController from "../../Controllers/Index/indexController";

class IndexRouter {

    public router: Router;

    constructor() {
        this.router = Router()
        this.config();
    }

    private config(): void {
        this.router.get('/', indexController.index);
    }

}

const indexRouter = new IndexRouter();
export default indexRouter.router;