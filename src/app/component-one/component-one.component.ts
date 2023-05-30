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
  inputText: string='';// valor del input text
  @Output() sendText = new EventEmitter<string>(); //enviando mediante el EventEmiter

  onClickAction(): void { // metodo onclick del boton
    this.sendText.emit(this.inputText);
  }
}

