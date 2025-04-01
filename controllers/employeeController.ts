import { Request, Response, NextFunction } from 'express';
import { Employee } from "../models";

const employees: Employee[] = [
    {
        id: 1,
        name: "José Augusto",
        document: "12345678912",
        position: "Entregador",
        workingHours: 40,
        salary: 1200,
        zipCode: "118113412",
    },
    {
        id: 2,
        name: "Carlinhos Brown",
        document: "12345678912",
        position: "Analista",
        workingHours: 40,
        salary: 1400,
        zipCode: "112113415",
    },
];

class EmployeeController {
    static listAll = (req: Request, res: Response, next: NextFunction) => {
        try {

            let filteredResult = employees;

            // Implementar busca pelos filtros
            const { name, position, workingHours } = req.query;

            // Filtros de texto devem buscar por partes das palavras e ignorar maiúsculas
            if (name) {
                filteredResult = filteredResult.filter(employee =>
                    employee.name.toLowerCase().includes((name as string).toLowerCase())
                );
            }

            if (position) {
                filteredResult = filteredResult.filter(employee =>
                    employee.position.toLowerCase().includes((position as string).toLowerCase())
                );
            }

            if (workingHours) {
                filteredResult = filteredResult.filter(employee =>
                    employee.workingHours === Number(workingHours)
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
            const employee = employees.find((employee) => {
                return employee.id === Number(req.params.id);
            });

            if (employee != null) {
                res.status(200).send(employee)
            } else {
                res.status(404).send("Funcionário não encontrado.")
            }

        } catch (e) {
            next(e)
        }
    }

    static register = (req: Request, res: Response, next: NextFunction) => {
        try {

            const employee = req.body;

            employees.push(employee);

            res.status(201).send("Funcionário adicionado com sucesso.");

        } catch (e) {
            next(e)
        }
    }

    static update = (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id); //converte para número
            const employee = req.body; //pega o corpo da requisição
            const index = employees.findIndex((employee) => employee.id === id);  //procura o índice do Funcionário

            if (index === -1) { //se não encontrar o Funcionário
                res.status(404).send(); //retorna erro 404
                return; //retorna
            }
            employees[index] = employee; //atualiza o Funcionário no índice
            res.status(200).send(); //retorna status 200

        } catch (e) {
            next(e)
        }
    }

    static delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            const employee = employees.find((employee) => {
                return employee.id === Number(req.params.id);
            });

            if (!employee) {
                res.status(404).send("Funcionário não encontrado.");
                return;
            }

            const index = employees.indexOf(employee);
            employees.splice(index, 1);

            res.send("Funcionário removido com sucesso.");
        } catch (e) {
            next(e)
        }
    }
}

export default EmployeeController;