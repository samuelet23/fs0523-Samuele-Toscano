import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';
import { iPosts } from '../posts';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {
   posts:iPosts[] = []
  constructor(private postsvc:PostService){}
  ngOnInit(){
    this.posts = this.postsvc.getPostInattivi()
  }
}
