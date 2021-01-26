import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   downloadMyFile(){
//     const link = document.createElement('a');
//     link.setAttribute('target', '_blank');
//     link.setAttribute('href', 'resume/Thirumalesh.Resume.pdf');
//     link.setAttribute('download', `products.csv`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
// }


}
