import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../model/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  chosenPost: Post;

  constructor(private postsServices: PostsService) { }

  ngOnInit(): void {
    this.postsServices.getPosts().subscribe(value => this.posts = value)
  }

  getPostBubble(post: Post){
    this.chosenPost = post;
  }
}
