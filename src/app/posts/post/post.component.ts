import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../model/post";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  @Output()
  postBubble = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  getPost(post: Post): void{
    this.postBubble.emit(post)
  }
}
