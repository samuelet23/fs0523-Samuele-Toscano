import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postsvc:PostService){}

  ngOnInit(){
   this.posts = this.postsvc.posts
  }
}
