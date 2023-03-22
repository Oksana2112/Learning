import { Item } from "../models/item"
import { ItemRank } from "../models/item-rank"
import { ItemType } from "../models/item-type"

export const itemRight:Item[]= [{
    level: 20,
    type: ItemType.Uniform,
    rank: ItemRank.Rank4,
    image: "/assets/armor-uniform2.png",
    newRank: "/assets/arrow.png"
  },
  {
    level: 19,
    type: ItemType.Ring,
    rank: ItemRank.Rank4,
    image: "/assets/armor-ring2.png"
  },
  {
    level: 30,
    type: ItemType.Friend,
    rank: ItemRank.Rank4,
    image: "/assets/armor-dog.png",
    newRank: "/assets/arrow.png"
  },
  {
    level: 15,
    type: ItemType.Kylon,
    rank: ItemRank.Rank3,
    image: "/assets/armor-kylon2.png",
    newRank: "/assets/arrow.png"
  }]