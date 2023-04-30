import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Model/Post';
import { ForumService } from 'src/app/Service/forum/forum.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  post!: Post ;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.forumService.getPostById(id)
      .subscribe(post => this.post = post);
  }

  updatePost(): void {
    const idUser="a900a796-5fdf-4416-8f25-ac3ea01f9514";
    this.forumService.updatePost(this.post,idUser)
      .subscribe(
        () => console.log('post offer updated successfully'),
        error => console.log(error)
      );
      this.router.navigate(['/front/listforum']);

  }
  
  
}
