
interface NameUrlPair {
  name: string;
  url: string;
}

interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

interface OtherSprites {
  dream_world: SimpleSprite;
  'official-artwork': SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: NameUrlPair;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  stats: Stats[];
  types: TypeOfPokemon[];
  weight: number;
}

interface LanguageVariant {
  name: string;
  language: NameUrlPair;
}

export interface PokemonColor {
  id: number;
  name: string;
  names: LanguageVariant[];
  pokemon_species: NameUrlPair[];
}

interface EffectEntries {
  effect: string;
  short_effect: string;
  language: LanguageVariant;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NameUrlPair;
  version_group: NameUrlPair;
}

export interface PokemonMove {
  id: number;
  name: string;
  power: number;
  names: LanguageVariant[];
  effect_entries: EffectEntries[];
  flavor_text_entries: FlavorTextEntry[];

}
