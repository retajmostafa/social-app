import { Component } from '@angular/core';
import { RightSideComponent } from '../../components/right-side/right-side/right-side.component';
import { LeftSideComponent } from '../../components/left-side/left-side/left-side.component';
import { PostComponent } from '../../components/post/post/post.component';

@Component({
  selector: 'app-feed',
  imports: [RightSideComponent, LeftSideComponent, PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {}
