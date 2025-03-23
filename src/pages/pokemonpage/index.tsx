import { useState, useEffect} from "react";
import useAxios from "../../components/useaxios";
import InputSearch from "../../components/inputsearch";
import PokemonCard from "../../components/pokemoncard";
import TableView from "../../components/tableview";
import { Pokemon } from "../../pokemonDataTypes";

export const PokemonPage = () => {
  const [searchValue, setSearchValue] = useState<string | number>("pikachu");

  const { response, loading, error, sendData } = useAxios<Pokemon>({
    method: "GET",
    url: ('pokemon/' + searchValue).toString(),
    headers: {
      accept: "*/*",
    },
  });

  const handleSearchSave = (newSearchValue: string | number) => {
    setSearchValue(newSearchValue);
  };

  useEffect(() => {
    if (searchValue && searchValue !== "pikachu") {
      sendData();
    }
  }, [searchValue]);

  return (
    <div className="container-fluid">
      <InputSearch onSave={handleSearchSave} />
      {loading &&
        <div className="text-center">
          <div className="spinner-border" style={{width: '5rem', height: '5rem'}}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      <div className="container">
      {error && (
        <p className="mx-auto text-center text-danger">
          {error.message} / {JSON.stringify(error.response?.data)}
        </p>
      )}
      {!loading && !error && (
        
        <div className='row gx-1'>
          <div className='col-sm-12 mb-4 col-xl-4 col-lg-4'>
            <PokemonCard pokemonData={response?.data} />
          </div>
          <div className='col-sm-12 col-xl-8 col-lg-8'>
          <TableView pokemonData={response?.data} />
          </div>
        </div>
        )}
        </div>
      </div>   
  
  )}
