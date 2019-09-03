import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  public apiKey="AIzaSyBgQ4qkv_kTJ3aNCtu4SzW3UwezYgsdUF0";
  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get<any>('https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=coldplay&type=video&videoDefinition=high&key=AIzaSyBgQ4qkv_kTJ3aNCtu4SzW3UwezYgsdUF0')
          .pipe(
            catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
  public x:string="";
  findData(x){
    console.log(x);
    return this.http.get<any>('https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q='+x+'&type=video&videoDefinition=high&key='+this.apiKey);
  }
  fetchData(x){
    return this.http.get<any>('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+x+'&key='+this.apiKey);

  }

  public ob={
    vid:"",
    title:"",
    commnt:""
  }

  postData(x,y)
  {
    this.ob.vid=x;
    this.ob.title=y;
    this.ob.commnt="";
    this.http.post("http://localhost:3000/favVid",this.ob).toPromise();
  }
  fetchFromRest(){
    return this.http.get<any>('http://localhost:3000/favVid');
  }
  removeFav(x){
    this.http.request('delete','http://localhost:3000/favVid/'+x)
    .subscribe(data =>console.log(data));
    //window.location.reload();
  }
  comment(comm,x,y,z)
  {  this.ob.vid=x;
    this.ob.title=y;
    this.ob.commnt=comm; 
    this.http.put('http://localhost:3000/favVid/'+z,this.ob).toPromise();
     

  }
}
