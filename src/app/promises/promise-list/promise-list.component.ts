import { Component, Input, OnInit } from '@angular/core';

import { Promise } from '../promise/promise.component';
import { PromiseListModel } from './promise-list.model';

@Component({
  selector: 'promise-list',
  directives: [Promise],
  template: require('./promise-list.component.html')
})
export class PromiseList implements OnInit {
  @Input() model: PromiseListModel;

  ngOnInit() {
  }
}
