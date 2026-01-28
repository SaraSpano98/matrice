import { config } from "../config";

export const mergeUrl = (path, type = "API") => {
    if (!["AUTH", "API"].includes(type)) throw new Error(`type must be 'AUTH' or 'API', got '${type}'`);
    return `${config[`${type}_HOST`]}${path}`;
};

