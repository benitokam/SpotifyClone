import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisteService } from '../Services/artiste.service';
import { Artistes } from '../model/artistes';
import { MiseFormeBodyComponent } from "../mise-forme-body/mise-forme-body.component";
import { AlbumServiceService } from '../Services/album-service.service';
import { Album } from '../model/album';
import { RadioService } from '../Services/radio.service';
import { Radio } from '../model/ radio';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, MiseFormeBodyComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
 listeArtistes! : Artistes[];
 listeAlbums! : Album[];
 listeRadios! : Radio[];
  constructor(private artisteService:ArtisteService,private albumService:AlbumServiceService,private radioService:RadioService) {}
  ngOnInit():void {
    this.listeArtistes = this.artisteService.getArtistes();
    this.listeAlbums = this.albumService.getAlbums();
      this.listeRadios = this.radioService.getRadio();

}

truncateText(text: string, limit: number) {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}

}