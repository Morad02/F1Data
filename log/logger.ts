import * as logger from "logger"
import { ArrayHandlers } from "./array_handler.ts";
import { ConfigMa } from "../utilities/config_ma.ts";

export class Logger{
    private static _instance: Logger;

    private constructor(){        

        const configMa = ConfigMa.instance();
        const loggerConfig = configMa.getLoggerConfig();
        const handler = loggerConfig.get("handler");
        let h;

        if (handler == "ConsoleHandler")
            h = new logger.handlers.ConsoleHandler( loggerConfig.get("level") as logger.LevelName,{formatter: loggerConfig.get("formatter")});   
            
        else
            h =  new ArrayHandlers( loggerConfig.get("level") as logger.LevelName,{formatter: loggerConfig.get("formatter")}); 

        logger.setup({
            handlers: {
                handler: h
            },
            loggers: {
                default: {
                    level: loggerConfig.get("level") as logger.LevelName,
                    handlers: ["handler"],

                }
            }

        });


    }

    static instance(): Logger{
        if(Logger._instance === undefined){
            Logger._instance = new Logger();
        }

        return Logger._instance;
    }

    
    getLogger(): logger.Logger
    {  
        
        return logger.getLogger();
    }


    getLogins(): string[]
    {
        if (logger.getLogger().handlers[0] instanceof ArrayHandlers)
            return (logger.getLogger().handlers[0] as ArrayHandlers).getLogins() ;
        else
            return [];
    }

            
}