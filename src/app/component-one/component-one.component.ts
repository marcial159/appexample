import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  @Output() myAction = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClickAction(): void {
    this.myAction.emit('accion realizada en el componente 1');
  }
}

