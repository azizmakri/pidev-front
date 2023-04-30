import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/Post';
import { ForumService } from 'src/app/Service/forum/forum.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  postId!: number;
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private forumService: ForumService) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id'];
    this.getPostById(this.postId);
  }

  getImage(pst: any): string {
    return 'data:image/jpeg;base64,' + pst.imagePost; // Replace "jpeg" with the actual image format
  }
  getPostById(productId: number): void {
    this.forumService.getPostById(productId)
      .subscribe(
        (data) => {
          this.post = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
