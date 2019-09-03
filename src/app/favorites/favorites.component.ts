import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [`
  nav{
    font-family: Verdana;
  }
  .videos{
    padding-top: 60px;
    text-align: center;
    font-family: Verdana;
  }
  .btn{
    margin-top: 5px;    
  }
  `]
})
export class FavoritesComponent implements OnInit {
  public dataFromRest;
  public dataFromFetch;
    public errorMsg="";
    public vidString="https://www.youtube.com/embed/";
  constructor( private yservice: ApiDataService, private router: Router) { }
  
  clickDetail(vidid){
    console.log(vidid);
    this.router.navigate(['/detail', vidid]);
  }
  removeFromRest(id){
    this.yservice.removeFav(id);
  }
  postComment(comm,vid,title,id){
   this.yservice.comment(comm,vid,title,id);
  }
  ngOnInit() {
    this.yservice.fetchFromRest()
    .subscribe(data => this.dataFromRest=data,
                error => this.errorMsg=error);  }

}
