import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colors: any = [
    { bgColor: "#2a9d8f", colorText: "#fff" },
    { bgColor: "#3d3522", colorText: "#f3ca40" },
    { bgColor: "#f3b5a6", colorText: "#264653" },
    { bgColor: "#db2b39", colorText: "#f0cea0" },
    { bgColor: "#a6cfa0", colorText: "#201f32" },
    { bgColor: "#2d5362", colorText: "#f4a666" },
    { bgColor: "#56cfe1", colorText: "#2b2d42" },
    { bgColor: "#ee2e31", colorText: "#fff" },
    { bgColor: "#f4a261", colorText: "#264653" },
    { bgColor: "#36413e", colorText: "#dcc9b6" },
  ];

  getRandColor = () => {
    let random = Math.floor(Math.random() * this.colors.length);
    return this.colors[random];
  };

  changeColor(){
    var colorBody = this.getRandColor();
    document.body.style.backgroundColor = colorBody.bgColor;
    document.body.style.color = colorBody.colorText;
  }

}
