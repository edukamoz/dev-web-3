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
    static listProducts = (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (e) {

        }
    }

    static listProductsById = (req: Request, res: Response, next: NextFunction) => {

    }
}

export default clientsController;