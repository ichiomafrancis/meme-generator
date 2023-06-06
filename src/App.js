import troll from './img/troll_face.svg';
import meme from './img/new_meme.svg';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <div className='title'>
          <img src={troll} alt='' />
          <h3>Meme Generator</h3>
        </div>
        <h3>React Course - Project 3</h3>
      </div>

      <div className='input-fields'>
        <input type='text' placeholder='top word' />
        <input type='text' placeholder='top word' />
      </div>

      <div className='new-meme'>
        <span>
          {/* <span>Get a new image</span> */}
          <img src={meme} alt='' className='' />
        </span>
      </div>

      <div></div>
    </div>
  );
}

export default App;
