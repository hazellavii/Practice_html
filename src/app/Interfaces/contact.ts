export interface Contact {
    id: string,
    firstName: string,
    lastName: string,
    address: string,
    number: string,
    email: string,
    image: string,
    company: string,
    isfavorite?: boolean //es opcional (?)
}



export type NewContact=Omit<Contact, "id">; 