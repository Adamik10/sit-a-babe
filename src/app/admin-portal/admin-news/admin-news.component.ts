import { Component, OnInit } from '@angular/core';
//import { Store } from "@ngrx/store";
//import { Observable } from "rxjs";

interface AppState {
  message: string;
}

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {

  ngOnInit() {
  }
  /*
  message$: Observable<string>

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' })
  } */

}
