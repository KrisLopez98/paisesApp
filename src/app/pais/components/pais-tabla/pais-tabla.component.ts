import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  /** Obtenciòn de los paìses de la interface Country */
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
