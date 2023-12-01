import { PostService } from './../post.service';
import { Component } from '@angular/core';
import { iPosts } from '../posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrl: './dettaglio-post.component.scss'
})
export class DettaglioPostComponent {
  post!:iPosts;
  constructor(public route: ActivatedRoute,public postsvc: PostService){}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.postsvc.getById(params.id)
        .then((foundPost: iPosts | undefined) => {
          console.log(foundPost);

          if (foundPost !== undefined) {
            this.post = foundPost;
          }
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
        });
    });
  }



}
