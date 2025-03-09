export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
};

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
};

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
};

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  abilities: Ability[];
  base_experience: number;
  held_items: HeldItem[];
  sprites: any;
  stats: Stat[];
};

export enum PokemonColorType {
  Bug = "bug",
  Dragon = "dragon",
  Electric = "electric",
  Fairy = "fairy",
  Fighting = "fighting",
  Fire = "fire",
  Flying = "flying",
  Grass = "grass",
  Ground = "ground",
  Ghost = "ghost",
  Ice = "ice",
  Normal = "normal",
  Poison = "poison",
  Psychic = "psychic",
  Rock = "rock",
  Water = "water",
}

