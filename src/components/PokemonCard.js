import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Card /* bg='dark' text='light' */ style={{ width: '18rem' }} className='m-2'>
      <Card.Img width="286" height="286" bg='dark' variant='top' src={pokemon?.sprites.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Abilities:
          {/* <ul> */}
            {pokemon?.abilities.map((ability) => (
              <span key={ability.ability.name}>{ability.ability.name}</span>
            ))}
          {/* </ul> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
