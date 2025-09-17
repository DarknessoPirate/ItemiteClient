import { Component } from '@angular/core';
import {Header} from '../../shared/header/header';
import {RouterOutlet} from '@angular/router';
import {Navbar} from '../../shared/navbar/navbar';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    RouterOutlet,
    Navbar
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
