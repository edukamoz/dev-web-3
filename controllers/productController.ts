import { Request, Response, NextFunction } from 'express';
import { Product } from "../models";

const products: Product[] = [
    {
        id: 1,
        name: "Feijão Carioca",
        brand: "Broto Legal",
        barCode: "98493874849278374989478",
        supplier: "Rede de Distribuição Ltda",
        stockId: 98,
        price: 8.79,
        weight: 1,
        measureUnit: "kg",
    },
    {
        id: 2,
        name: "Arroz",
        brand: "Tio João",
        barCode: "98475834587947857947984",
        supplier: "Rede de Distribuição Ltda",
        stockId: 65,
        price: 29.99,
        weight: 5,
        measureUnit: "kg",
    },
];

class ProductController {
    static listProducts = (req: Request, res: Response, next: NextFunction) => {
        try {

            res.json(products)

            next()

        } catch (e) {
            res.status(500).json({ message: "Erro interno do servidor" })
        }
    }

    static listProductsById = (req: Request, res: Response, next: NextFunction) => {
        try {
            const product = products.find((product) => {
                return product.id === Number(req.params.id);
            });

            if (product !== null) {
                res.status(200).send(product)
            } else {
                next()
            }

        } catch (e) {
            next(e)
        }
    }

    static registerProduct = (req: Request, res: Response, next: NextFunction) => {
        try {

            const product = req.body;

            products.push(product);

            res.status(201).send("Produto adicionado com sucesso.");

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
            const product = products.find((product) => {
                return product.id === Number(req.params.id);
            });

            if (!product) {
                res.status(404).send();
                return;
            }

            const index = products.indexOf(product);
            products.splice(index, 1);

            res.send("Produto removido com sucesso.");
        } catch (e) {
            next(e)
        }
    }

}

export default ProductController;