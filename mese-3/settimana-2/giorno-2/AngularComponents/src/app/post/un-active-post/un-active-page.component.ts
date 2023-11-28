import { Component, OnInit } from '@angular/core';
import {PostService  } from '../../post.service';
import {IPost} from '../../post'


@Component({
  selector: 'app-un-active-page',
  templateUrl: './un-active-page.component.html',
  styleUrl: './un-active-page.component.scss'
})
export class UnActivePageComponent implements OnInit {
   posts: IPost[] = [];

   constructor(private postsvc:PostService){}

   ngOnInit(){
    this.posts = this.postsvc.getPostInattivi()
   }

}
