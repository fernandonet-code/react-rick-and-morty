import CharacterList from './components/CharacterList.jsx';

export default function App() {
  return (
    <div className='bg-slate-900 h-auto'>
      <div className='container mx-auto sm:p-10 p-5'>
        <h1 className='text-white text-4xl font-rickandmorty md:text-6xl text-center sm:mb-10 mb-4 font-bold capitalize'>
          Rick and Morty
        </h1>
        <CharacterList />
      </div>
    </div>
  );
}
