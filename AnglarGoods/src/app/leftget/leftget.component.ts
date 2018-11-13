import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
 import { Response,Headers, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs';
 import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-leftget',
  templateUrl: './leftget.component.html',
  styleUrls: ['./leftget.component.css']
})

export class LeftgetComponent implements OnInit {

  constructor(private http: HttpClient){
  }
  people;
  ngOnInit() {
    this.http.get('http://localhost:1345/').subscribe(people => 
      this.people=people
    ); 
  }
  
 items=[];
 sitems=[]; 
 pname="";
 pnp="";

 pushItem=function(){
   if(this.pname!="")
   {
     
     this.items.push(this.pname+" had been accounted for the customer"+this.cname);
     this.pnp=this.pnp+this.pname+"   ";
     this.http.post('http://localhost:1337/'+this.orderid+"~"+this.pname+"~"+this.cname+"~"+this.phone+"~"+this.price+"~"+this.location).subscribe();
     this.orderid="";
     this.pname="";
     this.cname="";
     this.price="";
   
   this.phone="";
   this.location="";
   }
 }
 removeItem=function(index)
 {
   this.items.splice(index,1);
 }

 

}
