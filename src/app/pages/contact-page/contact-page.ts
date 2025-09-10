import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../component/contact-list-item/contact-list-item';
import { Contact, NewContact } from '../../Interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contact-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [RouterModule, ContactListItem, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {

    authService = inject(AuthService);
    contactsService = inject(ContactsService);
firstName: any;

    createContact(form:any){
      const nuevoContacto: NewContact ={
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      image: form.image,
      number: form.number,
      company: form.company,
      isfavorite: form.isfavorite

      }

      this.contactsService.createContact(nuevoContacto)

    }
  
  }
