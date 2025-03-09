import styles from './Card.module.css';
import { Pokemon, PokemonColorType } from '../../pokemonDataTypes';

interface PokemonCardProps {
  pokemonData?: Pokemon;
}

export const typeColor = {
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
  
const PokemonCard = ({ pokemonData }: PokemonCardProps) => {
  
   if (!pokemonData) {
    return <div className='text-uppercase text-gray fs-5 lead opacity-25'>No data available</div>;
  }

  const themeColor = typeColor[pokemonData.types[0].type.name as PokemonColorType];

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className={`${styles.card} card shadow`} style={{ background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)` }}>
        <div className="card-body p-4">
          <div className="d-flex justify-content-end">
            <div className="bg-white rounded-pill px-3 py-1">
              <span className="fw-bold">HP </span>
              {pokemonData.stats[0].base_stat}
            </div>
          </div>

          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className={`${styles.cardImg} img-fluid d-block mx-auto my-4`}
          />
          <h2 className="text-center fw-bold mb-3">
            {pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}
          </h2>

          <div className="d-flex justify-content-around mb-4">
            <span
              className="badge rounded-pill text-white px-4 py-2"
              style={{ backgroundColor: themeColor }}
            >
              {pokemonData.types[0].type.name}
            </span>
          </div>
          <div className="d-flex justify-content-between text-center">
            <div>
              <h3>{pokemonData.stats[1].base_stat}</h3>
              <p className="text-muted">Attack</p>
            </div>
            <div>
              <h3>{pokemonData.stats[2].base_stat}</h3>
              <p className="text-muted">Defense</p>
            </div>
            <div>
              <h3>{pokemonData.stats[5].base_stat}</h3>
              <p className="text-muted">Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard