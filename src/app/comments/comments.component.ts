import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../shared/resource.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/comments';
  comments$: Observable<Comment[]>;

  constructor(private resourceService: ResourceService) {
    this.comments$ = this.resourceService.getResources<Comment>(this.url, 'body');
  }

  ngOnInit() {
  }

}
