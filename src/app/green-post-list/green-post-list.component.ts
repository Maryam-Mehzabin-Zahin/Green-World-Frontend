import { Component } from '@angular/core';
import { GreenPost } from '../green-post';
import { GreenPostService } from '../green-post.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-green-post-list',
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './green-post-list.component.html',
  styleUrl: './green-post-list.component.scss'
})
export class GreenPostListComponent {
  greenPosts: GreenPost[] = [];
  constructor(private service: GreenPostService) {

  }

  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts() {
    this.service.getGreenPostList().subscribe(data => {
        this.greenPosts = data;
    });
  }
}
