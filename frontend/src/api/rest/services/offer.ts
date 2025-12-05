import { OfferDto } from "@/utils/types/validation/offer";
import api from "../api";
import {errorHandler} from "../api";

export const getOffers = async () => {
  try {
    const response = await api.get("/offer");
    console.log("Offers response data:", response.data as OfferDto[]);
    return response.data as OfferDto[];
  } catch (error: any) {
    return errorHandler(error);
  }
};

