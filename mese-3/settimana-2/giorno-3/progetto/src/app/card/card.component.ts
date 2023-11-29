import { iPosts } from './../posts';
import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

@Input() testo = ''
@Input() className:string = ''

@Input() posts:iPosts[] = []
checktype(){
  return this.posts.forEach((post)=>{
    if (post.type === 'news') {
      return
    } else if (post.type === 'education') {
      return
    }else if (post.type === 'politic') {
      return
    }

  })

}
}
