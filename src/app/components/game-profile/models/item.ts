import { ItemRank } from "./item-rank";
import { ItemType } from "./item-type";

export interface Item {
    level: number;
    type: ItemType;
    rank: ItemRank;
    image?: string;
    newRank?: string;
  }
  