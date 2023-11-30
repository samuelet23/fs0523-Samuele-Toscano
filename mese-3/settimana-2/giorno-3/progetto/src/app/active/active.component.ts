import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';
import { iPosts } from '../posts';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {

  posts:iPosts[] = []

  constructor(private postsvc:PostService, ){}
   ngOnInit(){
    this.updatePosts()
  }
  updatePosts(){
    this.posts = this.postsvc.getPostAttivi()
  }
  toggleStatus(post:iPosts){
    this.postsvc.togglePost(post)
    this.updatePosts()
  }
}
