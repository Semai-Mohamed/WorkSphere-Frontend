import { create } from "zustand";

export enum UserRole {
  ADMIN = "admin",
  FREELANCER = "freelancer",
  CLIENT = "client",
}

interface UserStore {
  role: UserRole;
  setRole: (role: UserRole) => void;
  id : number;
  setId : (id : number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  role: UserRole.CLIENT,
  setRole: (role) => set({ role }),
  id: 0,
  setId: (id) => set({ id }),
}));
