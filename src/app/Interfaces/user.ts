export interface user {
    id: string
    /** Nombre del usuario */
    firstName: string,
    /** apellido del usuario */
    lastName: string,
    userName: string,
    password: string,
}

/** Interfaz que es igual a User pero sin ID */
export type NewUser = Omit<user, "id"> 