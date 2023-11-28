import { Injectable } from '@angular/core';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: IPost[] = [
    {
      id: 0,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true
    },
    {
      id: 1,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false
    },
    {
      id: 2,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true
    },
    {
      id: 3,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false
    },
    {
      id: 4,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false
    },
    {
      id: 5,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true
    },
  ]


  getPostAttivi(){
    return this.posts.filter(p => p.attivo)
  }
  getPostInattivi(){
    return this.posts.filter(p => !p.attivo)

  }
}
