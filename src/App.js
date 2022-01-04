import Pokemon from './Pokemon';
import Lista from './Lista';
import Search from './Search';
import Typer from './Typer';
import PokemonVal from './PokemonVal';
import PokeTest from './PokeTest';
import Intro from './Intro';
import Bild from './Bild';
import Settings from './Settings';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useGlobalContext } from './context';
import ChooseLanguage from './ChooseLanguage';

function App() {
  const { viewSearch, viewSettings, toggleSearch, toggleSettings } =
    useGlobalContext();
  return (
    <div>
      <Bild />

      <div className="container">
        <div className="menubar">
          <div
            onClick={() => {
              toggleSearch();
            }}
          >
            {viewSearch ? <FaTimes /> : <FaBars />}
          </div>
          <ChooseLanguage />
        </div>
        {viewSearch ? (
          <div className="content">
            <Typer />
            <Search />
            <Lista />{' '}
          </div>
        ) : viewSettings ? (
          <Settings />
        ) : (
          <Pokemon />
        )}
      </div>
    </div>
  );
}
export default App;
