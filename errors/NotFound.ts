import DefaultError from "./DefaultError";

class NotFound extends DefaultError {
    constructor(message = "Página não encontrada") {
        super(message, 404);
    }
}

export default NotFound;