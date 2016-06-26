import { Component, Input } from '@angular/core';

import { PromiseModel } from './promise.model';

@Component({
  selector: 'promise',
  template: require('./promise.component.html')
})
export class Promise {
  @Input() model: PromiseModel;
}
