import { useState, useEffect} from "react";
import useAxios from "../../components/useaxios";
import InputSearch from "../../components/inputsearch";
import PokemonCard from "../../components/pokemoncard";
import TableView from "../../components/tableview";

export const PokemonPage = () => {
  const [searchValue, setSearchValue] = useState("ditto");

  const { response, loading, error, sendData } = useAxios({
    method: "GET",
    url: searchValue,
    headers: {
      accept: "*/*",
    },
  });

  const handleSearchSave = (newSearchValue: any) => {
    setSearchValue(newSearchValue);
  };

  useEffect(() => {
    if (searchValue !== "ditto") {
      sendData();
    }
  }, [searchValue]);

  return (
    <div className="clearfix container">

      <InputSearch onSave={handleSearchSave} />
      {loading &&
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      {error && (
        <p className="mx-auto text-center text-danger">
          {error.message} / {String(error.response?.data)}
        </p>
      )}
      {!loading && !error && (
        
        <div className='row gx-1'>
          <div className='col-sm-12 mb-4 col-xl-4 col-lg-4'>
            <PokemonCard pokemonData={response?.data} />
          </div>
          <div className='col-sm-12 col-xl-7 col-lg-7'>
          <TableView pokemonData={response?.data} />
          </div>
        </div>
      )}
      </div>   
  
  )}
