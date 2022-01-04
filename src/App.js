import Pokemon from './Pokemon';
import Lista from './Lista';
import Search from './Search';
import Typer from './Typer';
import PokemonVal from './PokemonVal';
// import rotom from './assets/images/rotom.png';
import PokeTest from './PokeTest';
import Intro from './Intro';
import { FaCog, FaBars } from 'react-icons/fa';
import Bild from './Bild';
import Settings from './Settings';

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
          <FaBars
            onClick={() => {
              toggleSearch();
            }}
          />
          <ChooseLanguage />
          {/* <FaCog
            onClick={() => {
              toggleSettings();
            }}
          /> */}
        </div>
        {viewSearch ? (
          <div className="content">
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
