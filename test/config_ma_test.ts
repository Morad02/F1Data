import { beforeAll, describe, it } from "bdd";
import { ConfigMa } from "../utilities/config_ma.ts";
import {existsSync} from "fs";
import { expect } from "chai";

describe("Configuration Managment", () => {
    const config = ConfigMa.instance();
    let logConfig:Map<string,string>;

    function loadEnv()
    {
        const data = Deno.readTextFileSync('.env');
        const env : Map<string, string> = new Map<string, string>();

        data.split('\n').forEach(line=>{
            const [key,value] = line.split('=');
            
            if(key && value)
            {
                env.set(key.trim(),value.trim());
            }
        });

        return env;
    }

    beforeAll(()=>{
        logConfig = config.getLoggerConfig();
    });
    
    it("Logger configuration", () => {
        
        if(existsSync(".env"))
        {
            const env:Map<string, string> = loadEnv();

            expect(logConfig.size == env.size).to.be.true;

            logConfig.forEach((value,key)=>{
                expect(env.has(key)).to.be.true;
                expect(env.get(key)).to.be.equal(value);
            });
        }
        else
        {
            const defaultConfig = new Map<string,string>([
                ["handler", "ArrayHandlers"],
                ["level", "DEBUG"],
                ["formatter", "[{levelName}] {msg}"]
            ]);

            expect(logConfig.size == defaultConfig.size).to.be.true;

            logConfig.forEach((value,key)=>{
                expect(defaultConfig.has(key)).to.be.true;
                expect(defaultConfig.get(key)).to.be.equal(value);
            });
        }
    });
});

