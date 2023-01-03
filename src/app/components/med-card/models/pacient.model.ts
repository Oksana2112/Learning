import { Adress } from "./adress.model";
import { ResultAnalises } from "./analis.model";
import { Sex } from "./sex.enum";

export class Pacient {
    name!:string;
    birthday!:Date;
    weight!:number;
    admission!: Date;
    adress!: Adress;
    sex!:Sex;
    blood_type!:Number;
    rhesus!:string;
    analis:ResultAnalises []=[];
    constructor(_name:string, _birthday:Date,_sex:Sex,_blood_type:number,_rhesus:string, _weight:number, _admission: Date, _adress:Adress){
        this.name=_name;
        this.birthday=_birthday;
        this.sex=_sex;
        this.weight=_weight;
        this.admission=_admission;
        this.adress=_adress;
        this.blood_type=_blood_type;
        this.rhesus=_rhesus;
       
    }
    
}
