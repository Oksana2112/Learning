import { Item } from "../models/item";
import { ItemRank } from "../models/item-rank";
import { ItemType } from "../models/item-type";

export const itemLeft:Item[]= [{
    level: 40,
    type: ItemType.Weapon,
    rank: ItemRank.Rank4,
    image: "/assets/armor-molot.png",
  },
  {
    level: 16,
    type: ItemType.Ring,
    rank: ItemRank.Rank5,
    image: "/assets/armor-ring2.png",
    newRank: "/assets/arrow.png"
  },
  {
    level: 20,
    type: ItemType.Friend,
    rank: ItemRank.Rank6,
    image: "/assets/armor-friend.png",
    newRank: "/assets/arrow.png"
  },
  {
    level: 30,
    type: ItemType.Bracelet,
    rank: ItemRank.Rank5,
    image: "/assets/armor-bracelet2.png"
  }]