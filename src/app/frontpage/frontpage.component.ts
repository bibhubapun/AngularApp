import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styles: [`
  nav{
    font-family: Verdana;
  }
  .videos{
    margin-top: 60px;
    text-align: center;
    font-family: Verdana;}
    .btn{
      margin: 5px;
    }
  `]
})
export class FrontpageComponent implements OnInit {
    public dataFromApp=[];
    public errorMsg="";
    public isSearched= false;
  constructor(private appData: ApiDataService, private router: Router) { }
  public vidString="https://www.youtube.com/embed/";
  ngOnInit() {
   this.appData.getData()
    .subscribe(data => this.dataFromApp=data,
                error => this.errorMsg=error);    
  }
  clickSearch(x){
    this.appData.findData(x).subscribe(data => this.dataFromApp=data);
    this.isSearched=true;
  }
  clickDetail(vidid){
    console.log(vidid);
    this.router.navigate(['/detail', vidid]);
  }
  addFav(x,y){
    this.appData.postData(x,y);
  }
}
