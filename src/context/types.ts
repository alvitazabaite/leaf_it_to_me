export type LoginType = {
  email: string;
  password: string;
};

export interface ProviderProps {
  user: string | null;
  token: string | null;
  login(data: LoginType): boolean;
  logout(): void;
}
