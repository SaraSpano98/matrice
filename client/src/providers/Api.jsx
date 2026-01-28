import { createContext } from "react";
import axios from "axios";
import { mergeUrl } from "../utils/url";
import { useSelector } from "react-redux";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const auth = useSelector((state) => state.auth || {});
    const { token } = auth;

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const get = async (path, type = "API") => {
        const response = await axios.get(mergeUrl(path, type), { headers });
        return response.data;
    };
    const post = async (path, payload, type = "API") => {
        const response = await axios.post(mergeUrl(path, type), payload, { headers });
        return response.data;
    };
    const put = async (path, payload, type = "API") => {
        const response = await axios.put(mergeUrl(path, type), payload, { headers });
        return response.data;
    };
    const del = async (path, type = "API") => {
        const response = await axios.delete(mergeUrl(path, type), { headers });
        return response.data;
    };

    return <ApiContext.Provider value={{ get, post, put, del }}>{children}</ApiContext.Provider>;
};

