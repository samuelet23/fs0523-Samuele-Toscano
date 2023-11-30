import { iPosts } from '../posts';
import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

@Input() post!:iPosts;


}

