import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentPost } from 'src/app/Model/CommentPost';
import { Post } from 'src/app/Model/Post';
import { Dislike } from 'src/app/Model/dislike';
import { Like } from 'src/app/Model/like';
import { ForumService } from 'src/app/Service/forum/forum.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  postId!: number;
  post!: Post;
  comment!:CommentPost;
  descriptionComment!:string;
  userId = "a900a796-5fdf-4416-8f25-ac3ea01f9514";
  like: Like = new Like();
  dislike: Dislike = new Dislike();

  

  constructor(private route: ActivatedRoute, private forumService: ForumService,private router: Router) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id'];
    this.getPostById(this.postId);
    this.comment = new CommentPost();
  }


  getImage(pst: any): string {
    return 'data:image/jpeg;base64,' + pst.imagePost; // Replace "jpeg" with the actual image format
  }
  getPostById(postId: number): void {
    this.forumService.getPostById(postId)
      .subscribe(
        (data) => {
          this.post = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addComment(): void {
    const idUser = "a900a796-5fdf-4416-8f25-ac3ea01f9514";
    console.log('111111');
    this.forumService.addComment(this.comment, idUser, this.postId)
      .subscribe(
        () => {
          console.log('comment added successfully');
          console.log(this.comment.descriptionComment);
          this.comment = new CommentPost();
          this.descriptionComment = '';
          location.reload(); 

        },
        error => console.log(error)
      );
  }

  deleteComment(comment: any): void {
    if (confirm('Are you sure you want to delete this post?')) {
      const idUser="a900a796-5fdf-4416-8f25-ac3ea01f9514";
      this.forumService.deleteComment(comment.idComment, idUser).subscribe(() => {
        location.reload(); 
      });
    }
  }


  onLikeClick(comment: any) {
    this.forumService.addAndAssignLike(this.like, this.userId, comment.idComment)
      .subscribe(() => {
        console.log('like added');
        location.reload();
      },    
      (error)=>{
        console.log(error)
      });
  }

  onDislikeClick(comment: any) {
    this.forumService.addAndAssignDislike(this.dislike, this.userId, comment.idComment)
      .subscribe(() => {
        console.log('dislike added');
        location.reload();
      },    
      (error)=>{
        console.log(error)
      });
  }
}
