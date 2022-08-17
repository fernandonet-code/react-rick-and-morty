import { useState, useEffect } from 'react';
import Character from './Character.jsx';

function NavPage({ page, setPage }) {
  return (
    <header className='flex justify-between sm:m-6 my-6 text-white'>
      <button
        className='text-sm px-2 py-1 sm:px-4 sm:py-2 font-rickandmorty bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none ring ring-violet-300 rounded-full'
        onClick={() => {
          setPage(page <= 1 ? 1 : page - 1);
        }}>
        Previous
      </button>
      <h1 className='text-sm px-2 py-1 sm:px-4 sm:py-2 font-rickandmorty rounded-full bg-violet-500'>Page {page}/42</h1>
      <button
        className='text-sm px-2 py-1 sm:px-4 sm:py-2 font-rickandmorty bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none ring ring-violet-300 rounded-full'
        onClick={() => {
          setPage(page >= 42 ? 42 : page + 1);
        }}>
        Next
      </button>
    </header>
  );
}

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fectchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }

    fectchData();
  }, [page]);

  return (
    <div>
      <NavPage page={page} setPage={setPage} />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {characters.map((character) => {
          return <Character character={character} key={character.id} />;
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
