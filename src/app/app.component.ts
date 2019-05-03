import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
optionalViews : boolean = true;

  constructor(private router: Router){
    let href = this.router.url;
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        console.log(event['url']);
        if(event['url'] && event['url'] == '/' || event['url'] == '/login' || event['url'] == '/register'){
          console.log("test");
          this.optionalViews = false;
        }
        else{
          this.optionalViews = true;
        }
      }
  });

  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
  }

}
