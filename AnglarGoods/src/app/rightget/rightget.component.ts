import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-rightget',
  templateUrl: './rightget.component.html',
  styleUrls: ['./rightget.component.css']
})
export class RightgetComponent implements OnInit {
  plc:any;
  oiu;
  constructor(private sanitizer: DomSanitizer,private http: HttpClient) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
   
  
  }
  
  private selectop:any;
 
  isValid=[];
 count=0;
arr=[];

  ngOnInit() {
    // console.log(this.count);
    this.http.get('http://localhost:1345/')
    .pipe(map(res => res ))
   .subscribe(people =>{ console.log(this.selectop = people)
                          for(let r of this.selectop)
                          {
                           
                              this.arr.push(r.location);
                              this.count++;
                          }
                          for(var i=0;i<this.count;i++)
                          {
                            this.isValid[i]=false;
                          }

                        });
    
  }  
    
  pushp(hl)
  {
    // for(let r of this.selectop)
    // {
    //   if(arr)
    // }
    for(var i=0;i<this.count;i++)
                          {
                            this.isValid[i]=false;
                          }
    this.isValid[hl]=true;
    console.log(this.arr[hl]);
  }
  
  mfun(yu)
  {
    
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/dir/KonguEngineeringCollege/'+yu);
    //  return this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps/?q='+yu+'&amp;ie=UTF8&amp;&amp;output=embed');
    
  }
    
  

}
