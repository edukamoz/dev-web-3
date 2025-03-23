import { Request, Response, NextFunction } from 'express';
import { Client } from "../models";

const clients: Client[] = [
    {
        id: 1,
        name: "Adriana Midori",
        document: "96047283004",
        zipCode: "13540000",
        phone: "15991815265",
        email: "adrianamidori@gmail.com"
    },
    {
        id: 2,
        name: "Eduardo Kamo",
        document: "40560351801",
        zipCode: "18113510",
        phone: "15991815264",
        email: "eduardokamoz@gmail.com"
    },
];

class clientsController {
    static listClients = (req: Request, res: Response, next: NextFunction) => {
        try {

            res.json(clients)

            next()

        } catch (e) {
            res.status(500).json({ message: "Erro interno do servidor" })
        }
    }

    static listClientsById = (req: Request, res: Response, next: NextFunction) => {
        try {
            const client = clients.find((client) => {
                return client.id === Number(req.params.id);
            });

            if (client != null) {
                res.status(200).send(client)
            } else {
                res.status(404).send("Cliente não encontrado.")
            }

        } catch (e) {
            next(e)
        }
    }

    static registerClient = (req: Request, res: Response, next: NextFunction) => {
        try {

            const client = req.body;

            clients.push(client);

            res.status(201).send("Cliente adicionado com sucesso.");

        } catch (e) {
            next(e)
        }
    }

    // static updateProduct = (req: Request, res: Response, next: NextFunction) => {
    //     try {

    //     } catch (e) {
    //         next(e)
    //     }
    // }

    static deleteProduct = (req: Request, res: Response, next: NextFunction) => {
        try {
            const client = clients.find((client) => {
                return client.id === Number(req.params.id);
            });

            if (!client) {
                res.status(404).send("Cliente não encontrado.");
                return;
            }

            const index = clients.indexOf(client);
            clients.splice(index, 1);

            res.send("Cliente removido com sucesso.");
        } catch (e) {
            next(e)
        }
    }
}

export default clientsController;