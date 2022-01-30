import axios from "axios";
import { SetDataFunction } from "../types";

const API_ENDPOINT = "https://covid-api.mmediagroup.fr/v1/";

const apiRequest = async (
    route: string,
    setData: SetDataFunction
): Promise<void> => {
    const data = (await axios.get(`${API_ENDPOINT}/${route}`)).data;
    setData(data);
};

export default apiRequest;
