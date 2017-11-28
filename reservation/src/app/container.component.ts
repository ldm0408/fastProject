import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div class="container-fluid">
	    <div class="row">
        <div class="col-md-1">LOGO</div>
        <div class="col-md-9">검색창</div>
        <div class="col-md-1"> <a href="#">로그인</a> | <a hre="#">회원가입</a></div>
        <div class="col-md-1">user사진</div>
	    </div>
    </div>
    <app-title></app-title>
    <app-nav></app-nav>
    <app-intro></app-intro>
    <app-map></app-map>
    <app-review></app-review>
  `,
  styles: [`
    .container-fluid{
      background: black;
      color: white;
      height: 70px;
    }`]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
