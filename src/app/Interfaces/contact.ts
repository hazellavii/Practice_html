export interface Contact {
    id: string,
    /** Nombre del contracto */
    firstName: string,
    lastName: string,
    address: string,
    number: string,
    email: string,
    image: string,
    company: string,
    isFavorite: boolean 
}

/** Interfaz que es igual a Contact pero sin ID */
export type NewContact=Omit<Contact, "id">; 