import styles from './Card.module.css';
import { PokemonData } from '../tableview';

interface PokemonCardProps {
  pokemonData: PokemonData;
}

export enum PokemonType {
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

export const typeColor: Record<PokemonType, string> = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};
  
const PokemonCard = ( props: PokemonCardProps ) => {

  const themeColor: string = typeColor[props.pokemonData.types[0].type.name as PokemonType];
  
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className={`${styles.card} card shadow`} style={{ background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)` }}>
        <div className="card-body p-4">
          <div className="d-flex justify-content-end">
            <div className="bg-white rounded-pill px-3 py-1">
              <span className="fw-bold">HP </span>
              {props.pokemonData.stats[0].base_stat}
            </div>
          </div>

          <img
            src={props.pokemonData.sprites.other.dream_world.front_default}
            alt={props.pokemonData.name}
            className={`${styles.cardImg} img-fluid d-block mx-auto my-4`}
          />
          <h2 className="text-center fw-bold mb-3">
            {props.pokemonData.name[0].toUpperCase() + props.pokemonData.name.slice(1)}
          </h2>

          <div className="d-flex justify-content-around mb-4">
            <span
              className="badge rounded-pill text-white px-4 py-2"
              style={{ backgroundColor: themeColor }}
            >
              {props.pokemonData.types[0].type.name}
            </span>
          </div>
          <div className="d-flex justify-content-between text-center">
            <div>
              <h3>{props.pokemonData.stats[1].base_stat}</h3>
              <p className="text-muted">Attack</p>
            </div>
            <div>
              <h3>{props.pokemonData.stats[2].base_stat}</h3>
              <p className="text-muted">Defense</p>
            </div>
            <div>
              <h3>{props.pokemonData.stats[5].base_stat}</h3>
              <p className="text-muted">Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard