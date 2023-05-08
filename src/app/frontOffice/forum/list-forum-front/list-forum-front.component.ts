import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Model/Post';
import { ForumService } from 'src/app/Service/forum/forum.service';

@Component({
  selector: 'app-list-forum-front',
  templateUrl: './list-forum-front.component.html',
  styleUrls: ['./list-forum-front.component.css']
})
export class ListForumFrontComponent {
  posts!:any[];
  userId = "a900a796-5fdf-4416-8f25-ac3ea01f9514";
  constructor(private service:ForumService,private router: Router){}

  ngOnInit(): void {
    this.service.getPosts().subscribe(res => {
      console.log(res)
      this.posts=res})
}
getImage(pst: any): string {
  return 'data:image/jpeg;base64,' + pst.imagePost; // Replace "jpeg" with the actual image format
}

editPost(post: Post) {
  this.router.navigate(['/front/edit', post.idPost]);
}
deletePost(post: any): void {
  if (confirm('Are you sure you want to delete this post?')) {
    const idUser="a900a796-5fdf-4416-8f25-ac3ea01f9514";
    this.service.deletePost(post.idPost, idUser).subscribe(() => {
      this.posts = this.posts.filter(p => p !== post);
    });
  }
}
goToPostDetails(postId: number): void {
  this.router.navigate(['/front/post-details', postId]);
}
}
