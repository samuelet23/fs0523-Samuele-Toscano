import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { iPosts } from '../posts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts:iPosts[] = []
  id:number = 0
  constructor(private postsvc:PostService, private router:Router, public  route :ActivatedRoute){}

  ngOnInit(){
    this.posts = this.postsvc.posts

  }
  }

