import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  posts: IPost[] = [];

  constructor(private postsvc:PostService){}

  ngOnInit(){
   this.posts = this.postsvc.getPostAttivi()
  }
}
