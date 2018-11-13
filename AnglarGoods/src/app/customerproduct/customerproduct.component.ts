import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-customerproduct',
  templateUrl: './customerproduct.component.html',
  styleUrls: ['./customerproduct.component.css']
})
export class CustomerproductComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer,private http: HttpClient) { }
  private dtails:any;

  ngOnInit() {
    this.http.get('http://localhost:1345/').subscribe(people => 
      this.dtails=people)
  }
  

}
