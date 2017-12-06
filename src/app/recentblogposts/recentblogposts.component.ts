import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recentblogposts',
  templateUrl: './recentblogposts.component.html',
  styleUrls: ['./recentblogposts.component.css']
})
export class RecentblogpostsComponent implements OnInit {

  blogObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    
  }

  ngOnInit() {
    this.blogObservable = this.getBlog('/blog');
  }

  getBlog(listPath): Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }

}
