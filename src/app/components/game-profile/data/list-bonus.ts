import { Bonus } from "../models/bonus";
import { BonusType } from "../models/bonus-type";


export const listBonus: Bonus[] = [{
    image: "/assets/health.png",
    distribution: true,
    accessible: false,
    actualLevel: BonusType.level3
},
{
    image: "/assets/crit.png",
    distribution:false ,
    accessible: false,
    actualLevel: BonusType.level2
},
{
    image: "/assets/dead.png",
    distribution:false,
    accessible: false,
    actualLevel: BonusType.level1
},
{
    image: "/assets/health.png",
    distribution: true,
    accessible: true,
    actualLevel: BonusType.level3
},
{
    image: "/assets/e5-skill.png",
    distribution: true,
    accessible: true,
    actualLevel: BonusType.level2
}


]