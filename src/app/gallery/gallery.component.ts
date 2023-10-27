import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent {
  cards = [
    { image: "../../assets/coffee1.jpg", txt1: "HOT CUP OF COFFEE" },
    { image: "../../assets/coffee3.jpg", txt1: "CUP OF TEA" },
    { image: "../../assets/coffee1.jpg", txt1: "HOT CUP OF COFFEE" },
    { image: "../../assets/coffee3.jpg", txt1: "CUP OF TEA" },
  ]
}
