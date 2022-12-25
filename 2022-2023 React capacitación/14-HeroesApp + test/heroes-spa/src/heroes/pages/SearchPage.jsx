import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";





export const Search = () => {


  const navigate = useNavigate();

  const location = useLocation();

  // const showSearch = (q.length === 0);
  // const showError  = (q.length > 0) && heroes.length === 0;

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputchange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //esto es para cuando realizemos la busqueda, encuentre del nombre tomado por el input
    // console.log({searchText});
    // if (searchText.trim().length <= 0) return; 
    navigate(`?q=${searchText}`);             //Asi controlamos el submit(Referencia del useForm. L.24) 
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Busqueda de Heroes"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputchange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
              ? <div className="alert alert-primary">Search a hero</div>
              :
              (heroes.length === 0)
              && <div className="alert alert-danger">No hero with <b>{q}</b></div>
          }

          {/* <div className="alert alert-primary">

            Search a hero

          </div>


          <div className="alert alert-danger">

            No existe el heroe <b>{q}</b>

          </div> */}

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>



      </div>
    </>
  )
}
