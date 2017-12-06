import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

import { blog } from '../shared/blog';

@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css']
})
export class NewarticleComponent implements OnInit {

  
  blogObservable: Observable<any[]>=null;
  blogRef: AngularFireList<any>=null;

  constructor(private db: AngularFireDatabase) {

    this.blogRef = db.list('/blog');
    this.blogObservable = this.blogRef.valueChanges();
   }

 
   addItem(newTitle: string, newContent: string){
     this.blogRef.push({title: newTitle, content: newContent});
   }

   updateTitle(key: string, newTitle: string ){
      this.blogRef.update(key, {title: newTitle});
   }
   updateContent(key: string, newContent: string ){
    this.blogRef.update(key, {content: newContent});
       }

      deleteItem(key: string): void{
        this.blogRef.remove(key);
        
      }

  ngOnInit() {
    this.blogObservable = this.getBlog('/blog');
  }

  getBlog(listPath): Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }

}
