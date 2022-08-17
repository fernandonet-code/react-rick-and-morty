import React from 'react';

export default function Character({ character }) {
  return (
    <figure className='flex h-32 p-0 sm:h-52 rounded-xl bg-zinc-700 sm:p-0'>
      <img
        className='h-auto rounded-l-xl'
        src={character.image}
        alt={character.name}
      />
      <div className='m-2 sm:m-4 text-white'>
        <h1 className='text-xs sm:text-2xl font-bold'>{character.name}</h1>
        <ul className='text-xs sm:text-base'>
          <li>
            {character.status === 'Alive'
              ? '🟢 Alive '
              : character.status === 'Dead'
              ? '🔴 Dead '
              : '❓Unknown '}
            - {character.species}
          </li>
          <li className='mt-2 text-gray-400'>Origin:</li>
          <li>{character.origin.name}</li>
          <li className='mt-2 text-gray-400'>Last know location:</li>
          <li>{character.location.name}</li>
        </ul>
      </div>
    </figure>
  );
}
