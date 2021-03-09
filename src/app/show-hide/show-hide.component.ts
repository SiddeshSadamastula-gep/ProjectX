import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css'],
})
export class ShowHideComponent implements OnInit {
  pics: any;
  constructor() {}

  ngOnInit(): void {
    this.pics = [
      {
        imgUrl: '/assets/A.jpg',
        dValue: 'A',
        visible: true,
      },
      {
        imgUrl: '/assets/B.jpg',
        dValue: 'B',
        visible: false,
      },
      {
        imgUrl: '/assets/C.jpg',
        dValue: 'C',
        visible: false,
      },
    ];
  }

  choosePicture(e) { 
    this.pics.forEach(pic => {
      pic.visible = pic.dValue == e.target.value ? true : false;
    });
  }

}
