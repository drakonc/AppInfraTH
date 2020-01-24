import express, { Application } from "express";
import exphbs from "express-handlebars";
import morgan from "morgan";
import path from "path";

//Rutas
import indexRouter from "./routes/indexRoute";

export class Aplicacion {

	public app: Application;

	constructor(private port?: number | string) {
		this.app = express();
		this.settings();
		this.middleware();
		this.routers();
	}

	private settings(): void {
		this.app.set("port", process.env.PORT || 3000);
		this.app.set("views", path.join(__dirname, "views"));
		this.app.engine(".hbs", exphbs({
			layoutsDir: path.join(this.app.get("views"), "layouts"),
			partialsDir: path.join(this.app.get("views"), "partials"),
			defaultLayout: "main",
			extname: ".hbs"
		}));
		this.app.set('view engine', '.hbs');
	}

	private middleware(): void {
		this.app.use(morgan("dev"));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	private routers(): void {
		this.app.use(express.static(path.join(__dirname, 'public')));
		this.app.use(indexRouter);
		this.app.use('*', (req, res) => {
			res.status(404).render('404');
		});
	}

	async start() {
		await this.app.listen(this.app.get("port"));
		console.log(`Server on Port: ${this.app.get("port")}`);
	}
}