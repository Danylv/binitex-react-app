import React from "react";
import styles from "./TableView.module.css";

export interface IPokemon {
  type: {
    name: string;
    url: string;
  };
  stat: {
    name: string;
  };
  base_stat: string;
  ability: {
    name: string;
  };
  item: {
    name: string;
  };
}

export interface PokemonData {
  name: string;
  id: number;
  sprites: any;
  types: IPokemon[];
  stats: IPokemon[];
  abilities: IPokemon[];
  held_items: IPokemon[];
}

export interface TableViewProps {
  pokemonData: PokemonData;
}

const TableView = (props: TableViewProps) => {

  function getColSpan(dataArray: IPokemon[]) {
    return props.pokemonData.stats.length / dataArray.length;
  }

  return (
    <div>
      <table className='table table-striped shadow pb-3 bg-body-tertiary rounded'>
        <tbody>
          <tr>
            <th
              scope='row'
              colSpan={2}
              className='fs-1 fw-bolder text-uppercase text-start opacity-25'
            >
              {props.pokemonData.name}{" "}
            </th>
            <th
              scope='row'
              colSpan={2}
              className='fs-1 fw-bolder text-uppercas text-start opacity-25'
            >
              ID {props.pokemonData.id}
            </th>
            <td
              className='p-auto lead text-uppercase fw-semibold opacity-25'
              colSpan={3}
            >
              <div className='row g-3'>
                {props.pokemonData.types.map(
                  (type: IPokemon, index_type: number) => (
                    <React.Fragment key={type.type.url}>
                      <div key={type.type.name} className='col-auto'>
                        {index_type == 0 ? "TYPES " : ""}
                      </div>
                      <div
                        key={type.type.url}
                        className='badge text-bg-secondary p-2'
                        style={{ width: "6rem" }}
                      >
                        {type.type.name}
                      </div>
                    </React.Fragment>
                  )
                )}
              </div>
            </td>
          </tr>
          <tr>
            <th scope='col' className='fs-5 text-start font-monospace'>
              Stats:
            </th>
            {props.pokemonData.stats.map(
              (stat: IPokemon, index_stat: number) => (
                <td
                  scope='col'
                  key={stat.stat.name}
                  style={{ fontSize: "12px" }}
                >
                  <span
                    title={stat.stat.name + " " + stat.base_stat}
                    className={`text-uppercase position-relative badge rounded-pill p-2 ${
                      index_stat < 1
                        ? "text-bg-danger"
                        : index_stat == 2 || index_stat === 3
                        ? "text-bg-success"
                        : index_stat == 4
                        ? "text-bg-warning"
                        : "text-bg-info"
                    }
                         ${
                           index_stat <= 4 ? "text-bg-succes" : "text-bg-info"
                         }`}
                  >
                    {stat.stat.name}{" "}
                    <span className={styles.hp_span}>
                      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary'>
                        {stat.base_stat}
                      </span>
                    </span>
                  </span>
                </td>
              )
            )}
          </tr>
          <tr>
            <th scope='row' className='fs-5 text-start font-monospace'>
              Abilities:
            </th>
            {props.pokemonData.abilities.map((ability: IPokemon) => (
              <td
                key={ability.ability.name}
                className='fs-6'
                colSpan={getColSpan(props.pokemonData.abilities)}
              >
                <span className='border border-1 border-black px-2 border-opacity-50 text-uppercase'>
                  <i className='bi bi-lightning-fill'></i>{" "}
                  {ability.ability.name}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <th scope='row' className='fs-5 text-start font-monospace'>
              Items:
            </th>
            {!props.pokemonData.held_items.length ? (
              <td
                colSpan={props.pokemonData.stats.length}
                className='text-uppercase text-gray fs-5 lead opacity-25'
              >
                no items for this pokemon
              </td>
            ) : (
              props.pokemonData.held_items.map((item: IPokemon) => (
                <td
                  key={item.item.name}
                  colSpan={getColSpan(props.pokemonData.held_items)}
                >
                  <span className='text-capitalised'>
                    {item.item.name} <i className='bi bi-box-fill'></i>
                  </span>
                </td>
              ))
            )}
          </tr>
        </tbody>
      </table>
      <div className={styles.page}>
        <div className='px-2 mb-2 bg-secondary bg-gradient text-white'>
          <p className='fs-1 fw-bolder text-uppercase text-start opacity-25'>
            Sprites & Pictures
          </p>
        </div>
        <div className='row justify-content-around'>
          <div
            className='col-2 spriteImgTemplater rounded-circle img-thumbnail'
            style={{
              backgroundImage: `url(${props.pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny})`,
              backgroundSize: "auto",
              backgroundColor: "#ffc107",
              padding: "1.9rem",
              backgroundPosition: "-29px -29px",
            }}
          ></div>
          <div
            className='col-2 spriteImgTemplater rounded-circle img-thumbnail'
            style={{
              backgroundImage: `url(${`${props.pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default}`})`,
              backgroundSize: "auto",
              backgroundColor: "#0dcaf0",
              padding: "1.9rem",
              backgroundPosition: "8px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className='col-2 spriteImgTemplater rounded-circle img-thumbnail'
            style={{
              backgroundImage: `url(${`${props.pokemonData.sprites.other["showdown"].back_default}`})`,
              backgroundSize: "auto",
              backgroundColor: "#adb5bd",
              padding: "1.9rem",
              backgroundPosition: "13px center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className='col-2 spriteImgTemplater rounded-circle img-thumbnail'
            style={{
              backgroundImage: `url(${`${props.pokemonData.sprites.other["showdown"].front_shiny}`})`,
              backgroundSize: "auto",
              backgroundColor: "rgb(255, 210, 64)",
              padding: "1.9rem",
              backgroundPosition: "9px center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className='col-2 spriteImgTemplater rounded-circle img-thumbnail'
            style={{
              backgroundImage: `url(${`${props.pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"].front_default}`})`,
              backgroundSize: "auto",
              backgroundColor: "#20c997",
              padding: "1.9rem",
              backgroundPosition: "-3px center",
              backgroundRepeat: "no-repeat",
              width: "65px",
              height: "65px",
            }}
          ></div>
          <div
            className='col-2 spriteImgTemplater rounded-circle img-thumbnail'
            style={{
              backgroundImage: `url(${`${props.pokemonData.sprites.versions["generation-iv"]["platinum"].front_default}`})`,
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
  );
};

export default TableView;
