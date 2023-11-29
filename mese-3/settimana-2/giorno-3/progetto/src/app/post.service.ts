import { Injectable, Output } from '@angular/core';
import { iPosts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 posts: iPosts[] = [
    {
      id: 0,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true,
      type:'news'
    },
    {
      id: 1,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false,
      type:'politic'
    },
    {
      id: 2,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true,
      type:'news'
    },
    {
      id: 3,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false,
      type:'education'
    },
    {
      id: 4,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false,
      type:'politic'
    },
    {
      id: 5,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true,
      type:'news'
    },
    {
      id: 6,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true,
      type:'education'
    },
    {
      id: 7,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false,
      type:'politic'
    },
    {
      id: 8,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true,
      type:'news'
    },
    {
      id: 9,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false,
      type:'education'
    },
    {
      id: 10,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:false,
      type:'politic'
    },
    {
      id: 11,
      title: ' lorem ipsum',
      secondTitle:'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      description:'Dolore tempor laborum laborum eu eu labore. Id aliqua veniam sunt in. Consectetur cillum quis excepteur duis velit. Et labore nisi duis laborum veniam dolore magna. Aute consequat cillum et non eiusmod mollit.',
      attivo:true,
      type:'news'
    },
  ]
  getAll(){
    return this.posts
  }

  getPostAttivi(){
    return this.posts.filter(p => p.attivo)
  }
  getPostInattivi(){
    return this.posts.filter(p => !p.attivo)
  }
  updatePost(obj: iPosts){
    return obj
  }



}
