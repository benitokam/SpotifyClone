import { musicElement } from './musicElement';
export class Radio extends musicElement {
    constructor(_id:number,_name:string,_type:string,_image1:string, private _image2:string,private _image3:string, private _background:string){
        super(_id,_name,_type,_image1);
    }
    public get background(): string {
        return this._background;
    }
    public set background(value: string) {
        this._background = value;
    }
    public get image2(): string {
        return this._image2;
    }
    public set image2(value: string) {
        this._image2 = value;
    }
    public get image3(): string {
        return this._image3;
    }
    public set image3(value: string) {
        this._image3 = value;
    }
}
