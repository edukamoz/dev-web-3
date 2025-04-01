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
    static listAll = (req: Request, res: Response, next: NextFunction) => {
        try {

            let filteredResult = products;

            // Implementar busca pelos filtros
            const { name, brand, supplier, stockId } = req.query;

            // Filtros de texto devem buscar por partes das palavras e ignorar maiúsculas
            if (name) {
                filteredResult = filteredResult.filter(product =>
                    product.name.toLowerCase().includes((name as string).toLowerCase())
                );
            }

            if (brand) {
                filteredResult = filteredResult.filter(product =>
                    product.brand.toLowerCase().includes((brand as string).toLowerCase())
                );
            }

            if (supplier) {
                filteredResult = filteredResult.filter(product =>
                    product.supplier.toLowerCase().includes((supplier as string).toLowerCase())
                );
            }

            if (stockId) {
                filteredResult = filteredResult.filter(product =>
                    product.stockId === Number(stockId)
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
            const product = products.find((product) => {
                return product.id === Number(req.params.id);
            });

            if (product != null) {
                res.status(200).send(product)
            } else {
                res.status(404).send("Produto não encontrado.")
            }

        } catch (e) {
            next(e)
        }
    }

    static register = (req: Request, res: Response, next: NextFunction) => {
        try {

            const product = req.body;

            products.push(product);

            res.status(201).send("Produto adicionado com sucesso.");

        } catch (e) {
            next(e)
        }
    }

    static update = (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id); //converte para número
            const product = req.body; //pega o corpo da requisição
            const index = products.findIndex((product) => product.id === id);  //procura o índice do produto

            if (index === -1) { //se não encontrar o produto
                res.status(404).send(); //retorna erro 404
                return; //retorna
            }
            products[index] = product; //atualiza o produto no índice
            res.status(200).send(); //retorna status 200

        } catch (e) {
            next(e)
        }
    }

    static delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            const product = products.find((product) => {
                return product.id === Number(req.params.id);
            });

            if (!product) {
                res.status(404).send("Produto não encontrado.");
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