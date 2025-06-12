export type LoginType = {
    email: string;
    password: string;
};

export interface ProviderProps {
    user: string | null;
    token: string | null;
    login(userData: LoginType): Promise<string | null>;
    registerUser(userData: LoginType): Promise<string | null>;
    logout(): void;
}
