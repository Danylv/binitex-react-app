import styles from "./TableView.module.css";
import {
  Pokemon,
  PokemonType,
  Stat,
  Ability,
  HeldItem,
} from "../../pokemonDataTypes";

export interface TableViewProps {
  pokemonData?: Pokemon;
}

const TableView = ({ pokemonData }: TableViewProps) => {
  if (!pokemonData) {
    return (
      <div className='text-uppercase text-gray fs-5 lead opacity-25'>
        No data available
      </div>
    );
  }

  return (
    <div>
      <div className='container mt-2 mb-3'>
        <div className={styles.grid_table}>
          <div className={styles.grid_column}>
            <div className={styles.grid_head_cell}>Main</div>
            <div className={[styles.grid_cell, 'text-uppercase'].join(' ')}>{pokemonData.name}</div>
            <div className={styles.grid_cell}>ID {pokemonData.id}</div>
          </div>

          <div className={styles.grid_column}>
            <div className={styles.grid_head_cell}>Types</div>
            {pokemonData.types.map((type: PokemonType) => (
              <div className={styles.grid_cell} key={type.type.name}>
                {type.type.name}
              </div>
            ))}
          </div>

          <div className={styles.grid_column}>
            <div className={styles.grid_head_cell}>Stats</div>
            {pokemonData.stats.map((stat: Stat) => (
              <div className={styles.grid_cell} key={stat.stat.name}>
                <span className='text-nowrap'>
                  {stat.stat.name}: {stat.base_stat}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.grid_column}>
            <div className={styles.grid_head_cell}>Abilities</div>
            {pokemonData.abilities.map((ability: Ability) => (
              <div className={styles.grid_cell} key={ability.ability.name}>
                <i className='bi bi-lightning-fill'></i> {ability.ability.name}
              </div>
            ))}
          </div>

          <div className={styles.grid_column}>
            <div className={styles.grid_head_cell}>Items</div>
            {pokemonData.held_items.length! ? pokemonData.held_items.map((held_item: HeldItem) => (
              <div className={styles.grid_cell} key={held_item.item.name}>
                {held_item.item.name} <i className='bi bi-box-fill'></i>
              </div>
            )) : <div className={[styles.grid_cell, 'text-body-secondary', 'opacity-50'].join(' ')}>no items</div>}
          </div>
        </div>
      </div>
      {/*<div className='container mt-4 mb-4'>
        <div className={styles.grid_head_cell}>
          {/*<div className={styles.grid_head_cell}>
            Sprites & Pictures
        </div>
          <div className='row mb-2 justify-content-between mx-1'>
            <div className='col-auto'>
              <div
                className=' spriteImgTemplater rounded-circle img-thumbnail'
                style={{
                  backgroundImage: `url(${pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny})`,
                  backgroundSize: "auto",
                  backgroundColor: "#ffc107",
                  padding: "1.9rem",
                  backgroundPosition: "-29px -29px",
                }}
              ></div>
            </div>
            <div className='col-auto'>
              <div
                className='spriteImgTemplater rounded-circle img-thumbnail'
                style={{
                  backgroundImage: `url(${`${pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default}`})`,
                  backgroundSize: "auto",
                  backgroundColor: "#0dcaf0",
                  padding: "1.9rem",
                  backgroundPosition: "8px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className='col-auto'>
              <div
                className='spriteImgTemplater rounded-circle img-thumbnail'
                style={{
                  backgroundImage: `url(${`${pokemonData.sprites.other["showdown"].back_default}`})`,
                  backgroundSize: "auto",
                  backgroundColor: "#adb5bd",
                  padding: "1.9rem",
                  backgroundPosition: "13px center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className='col-auto'>
              <div
                className='spriteImgTemplater rounded-circle img-thumbnail'
                style={{
                  backgroundImage: `url(${`${pokemonData.sprites.other["showdown"].front_shiny}`})`,
                  backgroundSize: "auto",
                  backgroundColor: "rgb(255, 210, 64)",
                  padding: "1.9rem",
                  backgroundPosition: "9px center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className='col-auto'>
              <div
                className='spriteImgTemplater rounded-circle img-thumbnail'
                style={{
                  backgroundImage: `url(${`${pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"].front_default}`})`,
                  backgroundSize: "auto",
                  backgroundColor: "#20c997",
                  padding: "1.9rem",
                  backgroundPosition: "-3px center",
                  backgroundRepeat: "no-repeat",
                  width: "65px",
                  height: "65px",
                }}
              ></div>
            </div>
            <div className='col-auto'>
              <div
                className='spriteImgTemplater rounded-circle img-thumbnail'
                style={{
                  backgroundImage: `url(${`${pokemonData.sprites.versions["generation-iv"]["platinum"].front_default}`})`,
                  backgroundSize: "auto",
                  backgroundColor: "#f43852",
                  padding: "1.9rem",
                  backgroundPosition: "-8px center",
                  backgroundRepeat: "no-repeat",
                  width: "65px",
                  height: "65px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default TableView;
