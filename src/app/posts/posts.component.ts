import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';
  posts$: Observable<Post[]>;

  constructor(private resourceService: ResourceService) {
    this.posts$ = this.resourceService.getResources<Post>(this.url, 'title');
  }

  ngOnInit() {
  }

}
