import express, { Request, Response } from 'express';

const routes = (app: express.Application): void => {
    app.route("/").get((req: Request, res: Response) => {
        res.status(200).send({ titulo: "Desenvolvimento Web III" });
    })

    app.use(
        express.json(),
    );

}

export default routes