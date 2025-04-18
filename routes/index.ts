import express, { Request, Response } from 'express';
import products from "./productsRoutes";
import clients from "./clientsRoutes";
import employees from "./employeeRoutes";

const routes = (app: express.Application): void => {
    app.route("/").get((req: Request, res: Response) => {
        res.status(200).send({ titulo: "Desenvolvimento Web III" });
    })

    app.use(
        express.json(),
        products,
        clients,
        employees
    );

}

export default routes