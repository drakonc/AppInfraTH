import { Aplicacion } from './app/app';
import database from './app/config/database';

async function main() {
	const app = new Aplicacion(3000);
	await app.start();
}

main();
