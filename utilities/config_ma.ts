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

    
             
}