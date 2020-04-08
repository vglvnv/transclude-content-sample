import { Component, OnInit, Directive, ContentChild, TemplateRef } from '@angular/core';

@Directive({
  selector: '[test-directive]'
})
export class TestDirective {
  constructor(public templateRef: TemplateRef<any>){}
}

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  @ContentChild(TestDirective) testDirectiveRef: TestDirective;

  constructor() { }

  ngOnInit() {
  }

}