import troll from './img/troll_face.svg';
import meme from './img/new_meme.svg';

function App() {
  return (
    <div className='body h-screen flex justify-center items-center bg-[#E5E5E5]'>
      <div className='app w-[550px] bg-white border border-[#D5D4D8] rounded-md overflow-hidden'>
        <div className=' header flex justify-between items-center h-16 bg-gradient-to-r from-dark-purple to-light-purple py-5 pl-5 pr-9 text-white shadow'>
          <div className='title flex'>
            <img src={troll} alt='' />
            <h3 className='text-xl font-bold ml-2'>Meme Generator</h3>
          </div>
          <h3 className='text-xs font-medium font-inter'>
            React Course - Project 3
          </h3>
        </div>

        <div className='section m-9'>
          <form className='input-fields flex justify-between'>
            <input
              type='text'
              placeholder='top text'
              className='w-56 p-2 border border-[#D5D4D8] outline-0 rounded-md'
            />
            <input
              type='text'
              placeholder='bottom text'
              className='w-56 px-2 border border-[#D5D4D8] outline-0 rounded-md'
            />
          </form>

          <button className='new-meme w-full mt-4 bg-gradient-to-r from-dark-purple to-light-purple py-2.5 flex justify-center rounded-md'>
            <img src={meme} alt='' className='' />
          </button>

          <div className='mt-9 mb-14 w-full h-[300px] border border-[#D5D4D8]'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
