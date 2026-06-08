import { create } from "zustand";

interface AuthState {
  user: any;
  loading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  loading: false,

  login: async (username, password) => {
    try {
      set({ loading: true });

      // API call
      // const response = await api.login(username, password);

      const user = {
        access_token: "asfd",
        username,
      };

      localStorage.setItem("user", JSON.stringify(user));
      set({ user });

      return true;
    } catch (error) {
      return false;
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));