import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild("profileSidebar") sidenav: MatSidenav;

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    if (this.isSidebarOpen == false){
      this.sidenav.open();
      var el = document.getElementById("profileContainer");
      el.style.pointerEvents = 'all';
      var body = document.getElementById("bodyMain");
      body.style.overflow = 'hidden';
      this.isSidebarOpen = true;
    }else{
      this.sidenav.close();
      var el = document.getElementById("profileContainer");
      el.style.pointerEvents = "none";
      var body = document.getElementById("bodyMain");
      body.style.overflow = 'hidden';
      this.isSidebarOpen = false;
    }

  }

  close() {
    this.sidenav.close();
    var el = document.getElementById("profileContainer");
    el.style.pointerEvents = "none";
    this.isSidebarOpen = false;
  }
}
