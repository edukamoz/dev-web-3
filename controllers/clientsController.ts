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
    static listAll = (req: Request, res: Response, next: NextFunction) => {
        try {

            let filteredResult = clients;

            // Implementar busca pelos filtros
            const { name } = req.query;

            // Filtros de texto devem buscar por partes das palavras e ignorar maiúsculas
            if (name) {
                filteredResult = filteredResult.filter(client =>
                    client.name.toLowerCase().includes((name as string).toLowerCase())
                );
            }

            res.json(filteredResult)

            next()

        } catch (e) {
            res.status(500).json({ message: "Erro interno do servidor" })
        }
    }

    static listById = (req: Request, res: Response, next: NextFunction) => {
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

    static register = (req: Request, res: Response, next: NextFunction) => {
        try {

            const client = req.body;

            clients.push(client);

            res.status(201).send("Cliente adicionado com sucesso.");

        } catch (e) {
            next(e)
        }
    }

    static update = (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id); //converte para número
            const client = req.body; //pega o corpo da requisição
            const index = clients.findIndex((client) => client.id === id);  //procura o índice do produto

            if (index === -1) { //se não encontrar o produto
                res.status(404).send(); //retorna erro 404
                return; //retorna
            }
            clients[index] = client; //atualiza o produto no índice
            res.status(200).send(); //retorna status 200
        } catch (e) {
            next(e)
        }
    }

    static delete = (req: Request, res: Response, next: NextFunction) => {
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