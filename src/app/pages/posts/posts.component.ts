import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(private data: DataService) {
   }

  ngOnInit() {

    this.mensajes = this.data.getPosts();
    // .subscribe((resp: any[]) => {
    //    console.log(resp);
    //   this.mensajes = resp;
    //  console.log(this.mensajes);
    // });
  }

  escuchaClick( id: number ) {
    console.log('Click en: ', id);
  }


}
