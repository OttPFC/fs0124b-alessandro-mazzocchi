export interface iAuth {
    email: string
    password: string
}
export interface SignUp {
    nome: string
    cognome: string
    password: string
    pronouns: string
    email: string
    bio: string
}

export interface iLoginData {
    user: iAuth
    accessToken: string
}