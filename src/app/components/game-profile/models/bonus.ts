import { BonusType } from "./bonus-type";

export interface Bonus{
    image?:string;
    distribution:boolean;
    accessible:boolean;
    actualLevel:BonusType;
  }
  