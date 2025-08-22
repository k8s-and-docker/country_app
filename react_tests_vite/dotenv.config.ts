import {config} from "dotenv";
import {resolve} from 'path';

type Modes = "local" | "test";
const MODE: Modes = process.env.MODE_TYPE as Modes || 'local';

const initEnvironment = (mode: Modes) => {
    config({ path: resolve(process.cwd(), 'env/base.env') })
    config({ path: resolve(process.cwd(), `env/custom/${ mode }.env`) })
}

const getCurrentPort = (mode: Modes): string | undefined => {
    switch(mode) {
        case "local":
            return process.env.DEV_PORT;
        case "test":
            return process.env.TEST_PORT;
    }
}

initEnvironment(MODE);

const CURRENT_PORT = getCurrentPort(MODE);
export const SERVER_PORT = parseInt(CURRENT_PORT || '5173');

export const DEV_PATH = `http://localhost:${ SERVER_PORT }`