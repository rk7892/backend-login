import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent,        
    },
    {
        path:'signin',
        component: SigninComponent,
        
    },
    {
    path:'**',
    redirectTo: 'login',
    }

    
];
