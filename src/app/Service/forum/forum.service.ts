import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Model/Post';

@Injectable({
  providedIn: 'root'
})
export class ForumService {


  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  

  getPosts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9001/forum/post/getall")
  }

  deletePost(idPost: number, idUser: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:9001/forum/post/delete/${idPost}/${idUser}`);
  }

  getPostById(postId: number): Observable<Post> {
    const url =  `http://localhost:9001/forum/post/getById/${postId}`;
    return this.http.get<Post>(url);
  }

  updatePost(postData:Post,idUser: string): Observable<Post> {
    const url = `http://localhost:9001/forum/post/edit/${postData.idPost}/${idUser}`;
    return this.http.put<Post>(url, postData);
  }
  
}
