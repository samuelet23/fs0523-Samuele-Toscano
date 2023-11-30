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
  posts:iPosts[] = []
  constructor(public route: ActivatedRoute,private postsvc: PostService){}

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      const postId = params.id; // Ottieni l'id del post dai parametri della route
      this.postsvc.getById(postId)
      console.log(params.id);


})
  }
}
