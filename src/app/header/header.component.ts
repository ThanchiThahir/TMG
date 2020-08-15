import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  /**
   menu list array
   */
  headerMenu: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuSection();
  }

  ngOnDestroy(): void{

  }
  menuSection() {
    this.headerMenu = [{
      menuName: "Home", menuNavlink: 'homerouting'
    },
     {
       menuName: "Services", menuNavlink: 'servicesrouting'
     },
     {
       menuName: "About", menuNavlink: 'aboutrouting'
     },
     {
       menuName: "Blog", menuNavlink: 'blogrouting'
     },
     {
       menuName: "Contact", menuNavlink: 'contactrouting'
   }
    ]
  }
}
