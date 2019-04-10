import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  response: any;
  constructor(private http: HttpClient) {
   }

  ngOnInit() {
  }
  LocationInfoAPICall() {
    this.http.get('http://10.12.10.134:8080/ip/')
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
