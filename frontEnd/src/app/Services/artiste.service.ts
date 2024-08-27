import { Injectable } from '@angular/core';
import { Artistes } from '../model/artistes';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
   private artistes:Artistes[] = [
    new Artistes(1, "Ariana Grande","Artiste","https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/qui-est-ariana-grande-la-nouvelle-idole-des-jeunes/45432877-6-fre-FR/Ariana-Grande-itineraire-de-l-idole-des-jeunes.jpg"),
    new Artistes(2, "Kendrick Lamar", "Artiste","data:image/webp;base64,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"),
    new Artistes(3, "Kanye West",  "Artiste","https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/519C/production/_127329802_mediaitem127329801.jpg.webp"),
    new Artistes(4, "Beyonce", "Artiste", "https://www.rollingstone.com/wp-content/uploads/2024/08/beyonce-dnc-performance-rumors.jpg?w=1581&h=1054&crop=1"),
    new Artistes(5, "Drake", "Artiste", "https://cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/1900x1900-000000-80-0-0.jpg"),
    new Artistes(6, "Rihanna",  "Artiste","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiDke_3KR5bqi5D6G2P3UteLgcnPVMcDJFg&s"),
    new Artistes(7, "Taylor Swift", "Artiste", "https://cdn-s-www.lalsace.fr/images/6015C06B-0B2E-4C7D-ACF1-E3CF5D5C874B/NW_raw/les-9-mai-taylor-swift-debarque-en-france-avec-son-gigantesque-eras-tour-pour-un-premier-concert-a-paris-avant-de-se-produire-a-lyon-les-2-et-3-juin-photo-sipa-james-gourley-1715099152.jpg"),
    new Artistes(8, "The Weeknd", "Artiste", "https://toutelaculture.com/wp-content/uploads/2022/01/XOOO.jpg")
   ]
  

   getArtistes(): Artistes[] {
      return [...this.artistes];
   }
}
