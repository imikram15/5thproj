import { Component } from '@angular/core';

@Component({
    template:`
    <ul>
        <li>
        <a [routerLink] ="['formassignment']" routerLinkActive ="active">Assignment Form </a>
        </li>
    </ul>
    <router-outlet></router-outlet> 
    `
  })
  export class FormsComponent {

  }