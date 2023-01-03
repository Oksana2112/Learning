export class Adress{
    city!:string;
    street!:string;
    building!:number;
    apartment!:number;
    constructor( _city:string, _street:string, _building:number, _apartment:number){
        this.city=_city;
        this.street=_street;
        this.building=_building;
        this.apartment=_apartment;
    }
    
}
