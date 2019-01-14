import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { authService } from '../common/auth.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private authService: authService, private profilePage: ProfileComponent) {}

  ngOnInit() {}

  @ViewChild("profileSidebar") sidenav: MatSidenav;

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    if (this.isSidebarOpen == false) {
      this.sidenav.open();
      var el = document.getElementById("profileContainer");
      el.style.pointerEvents = "all";
      var body = document.getElementById("bodyMain");
      body.style.overflow = "hidden";
      this.isSidebarOpen = true;
    } else {
      this.sidenav.close();
      var el = document.getElementById("profileContainer");
      el.style.pointerEvents = "none";
      var body = document.getElementById("bodyMain");
      body.style.overflow = "visible";
      this.isSidebarOpen = false;
    }
  }

  close() {
    this.sidenav.close();
    var el = document.getElementById("profileContainer");
    el.style.pointerEvents = "none";
    var body = document.getElementById("bodyMain");
    body.style.overflow = "visible";
    this.isSidebarOpen = false;
  }

  openCurrentUser(){
    this.profilePage.updateToCurrentUser()
  }
}