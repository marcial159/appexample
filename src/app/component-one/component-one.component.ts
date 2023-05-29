import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  inputValue?: string;
  @Output() sendText = new EventEmitter<string>();

  onClickAction(): void {
    this.sendText.emit(this.inputValue);
  }
}

