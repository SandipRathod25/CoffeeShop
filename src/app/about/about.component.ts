import { Component, OnInit } from '@angular/core';
declare const AOS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
