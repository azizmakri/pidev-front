import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Model/Post';
import { Like } from '../../Model/like';
import { Dislike } from '../../Model/dislike';
import { CommentPost } from 'src/app/Model/CommentPost';

@Injectable({
  providedIn: 'root'
})
export class ForumService {


  constructor(private http:HttpClient) { 
    
  }
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
  addComment(c: CommentPost, idUser: string, idPost: number): Observable<CommentPost> {
    const url = `http://localhost:9001/forum/comment/add/${idUser}/${idPost}`;
    return this.http.post<CommentPost>(url, c);
  }

  updateComment(c: CommentPost, idUser: string, idComment: number): Observable<CommentPost> {
    const url = `http://localhost:9001/forum/comment/edit/${idUser}/${idComment}`;
    return this.http.put<CommentPost>(url, c);
  }

  deleteComment(idComment: number, idUser: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:9001/forum/comment/delete/${idComment}/${idUser}`);
  }

  addAndAssignLike( like: Like ,id_User:string,idComment: number){
    return this.http.post(`http://localhost:9001/forum/like/likeComment/${id_User}/${idComment}`,like)
  }

  addAndAssignDislike( dislike: Dislike ,id_User:string,idComment: number){
    return this.http.post(`http://localhost:9001/forum/dislike/dislikeComment/${id_User}/${idComment}`,dislike)
  }
  
  getCommentsSortedByAverage(idPost: number): Observable<CommentPost[]> {
    const url = `http://localhost:9001/forum/comment/getSorted/${idPost}`;
    return this.http.get<CommentPost[]>(url);
  }
  
}
