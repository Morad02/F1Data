import { BaseHandler, HandlerOptions } from "handlers";
import { LevelName} from "logger";


export class ArrayHandlers extends BaseHandler {
    private _logins: string[] = [];

    constructor(levelName:  LevelName, options: HandlerOptions = {}) {
        super(levelName, options);
        this._logins = [];
    }

    override log(msg: string) {

        this._logins.push(msg);
    }

    getLogins(): string[] {
        return this._logins;
    }
}