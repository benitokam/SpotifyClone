import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artistes } from 'src/app/model/artistes';
import { musicElement } from '../model/musicElement';
import { Album } from '../model/album';

@Component({
  selector: 'app-mise-forme-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mise-forme-body.component.html',
  styleUrls: ['./mise-forme-body.component.scss']
})
export class MiseFormeBodyComponent {
   @Input() liste! : musicElement[]
   @Input() rounded_full! : boolean

}
