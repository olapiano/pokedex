import Pokemon from './Pokemon';
import Lista from './Lista';
import Search from './Search';
import Typer from './Typer';
import PokemonVal from './PokemonVal';
// import rotom from './assets/images/rotom.png';
import PokeTest from './PokeTest';
import Intro from './Intro';

function App() {
  return (
    <div>
      {/* <Intro /> */}
      <div className="rotom-outside-outline">
        <div className="rotom-border">
          <div className="rotom-inside-outline">
            <Pokemon />
            <Search />

            <Lista />
          </div>
        </div>
        {/* <PokeTest /> */}
        {/* <PokemonVal /> */}

        {/* <div className="col-sm-4">
          <Typer />
        </div> */}
      </div>
    </div>
  );
}
export default App;