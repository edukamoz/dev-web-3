import IncorrectRequest from "./IncorrectRequest";

class ValidatorError extends IncorrectRequest {
    constructor(e: { errors: Record<string, { message: string }> }) {
        const mensagensErro = Object.values(e.errors)
            .map(e => e.message)
            .join("; ");

        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ValidatorError;