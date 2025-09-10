import { Routes } from '@angular/router';
import { LoginPages } from './pages/login-pages/login-pages'; 
import { ContactPage } from './pages/contact-page/contact-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { Groups } from './pages/groups/groups';
import { RegisterPage } from './pages/register-page/register-page';

export const routes: Routes = [
    {
        path:"login",
        component: LoginPages
    },
    {
        path: "register",
        component: RegisterPage
    },
    {
        path: "",
        component: LoggedLayout,
        children: [
            {
                path: "",
                component: ContactPage  
            },
            {
                path: "contacts/:id",
                component: ContactDetailsPage
            },
            {
                path: "groups",
                component: Groups  
            },
        ]
    }, 

];