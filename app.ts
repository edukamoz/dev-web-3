// Importação da biblioteca Express
import express, { Request, Response } from "express";

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

// Tipagem para os produtos
interface Product {
  id: number;
  name: string;
  brand: string;
  barCode: string;
  supplier: string;
  stockId: number;
  price: number;
  weight: number;
  measureUnit: string;
};

// Tipagem para os clientes
interface Client {
  id: number;
  name: string;
  document: string;
  zipCode: string;
  phone: string;
  email: string;
};

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

// Define método Http Get que responde no path /product
app.get("/product", (req: Request, res: Response) => {
  res.status(200).json(products);
});

// Define método Http Get que responde no path /product/:id
app.get("/product/:id", (req: Request, res: Response) => {
  const product = products.find((product) => {
    return product.id === Number(req.params.id);
  });

  if (!product) {
    res.status(404).send();
    return;
  }

  // Responde requisição com o produto encontrado
  res.status(200).json(product);
});

// Define método Http Post que responde no path /product
app.post("/product", (req: Request, res: Response) => {
  const product = req.body;
  products.push(product);

  res.status(201).send("Produto adicionado com sucesso.");
});

// Define o método Http Delete que responde ao path /product/:id
app.delete("/product/:id", (req: Request, res: Response) => {
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

})

// Inicia aplicação na Porta 3000
app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});

export default app;