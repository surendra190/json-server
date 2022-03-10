import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Json-server';
data={
  "id": 4,
  "title": "json-server new",
  "author": "typicode34"
}


new:any;
constructor(private _http:HttpClient){
this.postdata(this.data);
this.getdata();
}

  postdata(data:any){
return this._http.post<any>('http://localhost:3000/posts',data).subscribe((res)=>{
  return res;
},(err)=>{
  alert(" post "+JSON.stringify(err));
})
  }


  getdata(){
    return this._http.get<any>('http://localhost:3000/posts').subscribe((res)=>{
      this.new= res;
    },(err)=>{
      alert(" get "+JSON.stringify(err)+" get");
    })
      }
    

  


}
