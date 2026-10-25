import { Component, signal, WritableSignal } from '@angular/core';
import { IPost } from '../../posts/ipost.interface';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {


constructor(private _ActivatedRoute:ActivatedRoute){}
postId:WritableSignal<string>=signal('')
postData = signal<IPost>({} as IPost)
ngOnInit():void{
  this . _ActivatedRoute.paramMap.subscribe ((param)=> this.postId.set(param.get('id')!))

}

getPostDetails(){
  this._PostsService.getSinglePost(this.postId()).subscribe
}


}
