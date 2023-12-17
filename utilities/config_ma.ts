import {loadSync} from 'dotenv';

export class ConfigMa {
    private static env: any;
    private static _instance: ConfigMa;

    private constructor(){
        
        try {
            ConfigMa.env = loadSync();

        } catch (e) {
            ConfigMa.env = {};
        }
    }

    static instance(): ConfigMa{
        if(ConfigMa._instance === undefined){
            ConfigMa._instance = new ConfigMa();
        }

        return ConfigMa._instance;
    }

    getLogerConfig(): Map<string, string>
    {
        const map = new Map<string, string>();
        
        if (ConfigMa.env === undefined || ConfigMa.env.LOGGER === undefined)
        {
            map.set("handler", "ArrayHandlers");
            map.set("level", "DEBUG");
            map.set("formatter", "[{levelName}] {msg}");
        }
        else {
            const logger = ConfigMa.env.LOGGER;
                map.set("handler", logger.HANDLER);
                map.set("level", logger.LEVEL);
                map.set("formatter", logger.FORMATTER);
        }
        
        return map;
    }
             
}