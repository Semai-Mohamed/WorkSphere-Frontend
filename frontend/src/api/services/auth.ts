import { SignIndto, SignUpdto } from "@/utils/types/api/auth";
import api from "../api";

const errorHandler = (error: any) => {
  return {
    error: error?.response?.data?.message || "Something went wrong",
  };
}

export const signIn = async (dto : SignIndto) => {
  try {
    const response =  await api.post("/auth/signin", dto);
  } catch (error :any) {
   return errorHandler(error);
  }
}

export const signUp = async (dto : SignUpdto) => {
    try {
        const response =  await api.post("/auth/signup", dto);
    } catch (error :any) {
       return errorHandler(error);
    }
}

export const googleAuth = async () => {
    try {
        const response =  await api.get("/auth/google");
    } catch (error :any) {
       return errorHandler(error);
    }
}

export const googleAuthCallback = async () => {
    try {
        const response =  await api.get(`/auth/google/callback`);
    } catch (error :any) {
       return errorHandler(error);
    }
}

export const forgetPassword = async () => {
    try {
        const response =  await api.post(`/auth/forgetPassword`); 
    } catch (error :any) {
       return errorHandler(error);
    }
}

export const resetPassword = async () => {
    try {
        const response =  await api.post(`/auth/resetPassword`)
    } catch (error :any) {
       return errorHandler(error);
    }
}

export const signOut = async () => {
    try {
        const response =  await api.post(`/auth/logout`)
    } catch (error :any) {    
         return errorHandler(error);
    }
}

export const refreshAccessToken = async () => {
    try {
        const response =  await api.get(`/auth/refresh`)
    } catch (error :any) {    
         return errorHandler(error);
    }
}