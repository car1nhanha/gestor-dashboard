import Api from "./api";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface AuthResponse {
  token: string;
}

class AuthService extends Api {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await this.post<AuthResponse>("/auth/login", credentials);
    localStorage.setItem("token", response.token);
    return response;
  }

  async register(data: RegisterData): Promise<void> {
    await this.post<void>("/auth/register", data);
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}

export default new AuthService();
