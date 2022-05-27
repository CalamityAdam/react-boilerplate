import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navigation />

      <Container>
        <Row className='g-4'>
          {pokemon.map((poke) => (
            <Col key={poke.name}>
              <PokemonCard url={poke.url} name={poke.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export { App };
