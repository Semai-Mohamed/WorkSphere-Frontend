import { PortfolioDto } from "@/utils/types/validation/schemas";
import api, { errorHandler } from "../api";

export const createPortfolio = async (dto : PortfolioDto) => {
    try {
        const response =  await api.post("/portfolio/create", dto);
        return response.data;
    } catch (error :any) {
       return errorHandler(error);
    }
}