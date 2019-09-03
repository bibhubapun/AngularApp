import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styles: [`
  nav{
    font-family: Verdana;
  }
  .card{
    text-align: center;
    font-family: Verdana;
  }
  .btn{
    margin: 10px;
  }
  .card{
    margin-top: 60px;
  }`]
})
export class ViewDetailsComponent implements OnInit {
  public dataFromApp=[];
  public errorMsg="";
  constructor(private route: ActivatedRoute, private yservice: ApiDataService) { }
  public vId;
  public vidString="https://www.youtube.com/embed/";

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('vidid');
    this.vId=id;
     console.log(this.vId);
    this.yservice.fetchData(this.vId).subscribe((data={}) => {
      console.log("Inside method");
      console.log(data);
      this.dataFromApp=data});
  }
  addFav(x,y){
     this.yservice.postData(x,y);
     console.log(x);
  }
  
    
    
}
