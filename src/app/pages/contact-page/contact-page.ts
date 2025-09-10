import { Component, inject, OnInit } from '@angular/core';
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
export class ContactPage implements OnInit {
    ngOnInit(): void {
      this.contactsService.getContacts();
    }

    authService = inject(AuthService);
    contactsService = inject(ContactsService);

    createContact(form:any){
      const nuevoContacto: NewContact ={
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      image: form.image,
      number: form.number,
      company: form.company,
      isFavorite: form.isfavorite
      }

      this.contactsService.createContact(nuevoContacto)
    }
  }
