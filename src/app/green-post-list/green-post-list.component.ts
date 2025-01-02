import { Component, signal } from '@angular/core';
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
  searchText = signal('');

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

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchText.set(inputElement.value);
  }

  onSearchSubmit(): void {
    console.log('Search Submitted:', this.searchText());
  }
  // searchPosts() {
  //   if (this.searchText.trim() === '') {
  //     this.getAllPosts();
  //   } else {
  //     this.service.searchGreenPosts(this.searchText).subscribe({
  //       next: (data: GreenPost[]) => {
  //         this.greenPosts = data;
  //       },
  //       error: (error) => console.error('Error searching posts:', error)
  //     });
  //   }
  // }
}
