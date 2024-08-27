export class musicElement {
    constructor(private _id:number, private _name:string,private _type:string , private _image:string){}

    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
   
    public get image(): string {
        return this._image;
    }
   public get type(): string {  
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
}