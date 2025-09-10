export interface user {
    id: string,
    /** Nombre del usuario */
    firstName: string,
    /** apellido del usuario */
    lastName: string,
    /** Email del usuario */
    email: string,
    /** Contraseña del usuario */
    password: string,
}

/** Interfaz que es igual a User pero sin ID */
export type NewUser = Omit<user, "id"> 