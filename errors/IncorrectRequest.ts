import DefaultError from "./DefaultError";

class IncorrectRequest extends DefaultError {
    constructor(message = "Um ou mais dados fornecidos estão incorretos") {
        super(message, 400);
    }
}

export default IncorrectRequest;