import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _HttpClient = inject(HttpClient)

  header:object = {
    headers : {
      token : localStorage.getItem('token')!
    }
  }

  GetAllPosts():Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/posts` , this.header)
  }

  CreatePost(data:FormData):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/posts` , data , this.header )
  }

  getSinglePOst(postId:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/post/${postId}`)
  }
}
