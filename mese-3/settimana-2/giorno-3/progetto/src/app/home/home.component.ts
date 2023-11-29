import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { iPosts } from '../posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts:iPosts[] = []
  constructor(private postsvc:PostService){}
  ngOnInit(){
    this.posts = this.postsvc.posts
  }

}
