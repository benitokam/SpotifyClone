import { musicElement } from './musicElement';
export class Artistes extends musicElement {
    constructor( _id:number,  _name:string, _type:string, _image:string){
        super(_id, _name, _type,_image);
    }
}