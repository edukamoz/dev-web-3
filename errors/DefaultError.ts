import { Response } from "express";

class DefaultError extends Error {
    status: number;
    constructor(message = "Erro interno do servidor", status: number = 500) {
        super();
        this.message = message;
        this.status = status;
    }

    sendResponse(res: Response) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        });
    }
}

export default DefaultError;