import React from 'react';
import { Carousel } from 'react-bootstrap';

function App() {
  const cats = [
    {
      imgUrl: 'https://source.unsplash.com/FbhNdD1ow2g',
      name: 'Dopey',
      about: 'Just here for the snacks',
    },
    {
      imgUrl: 'https://source.unsplash.com/IZaXUf6sLiA',
      name: 'Grumpy',
      about: "Tired of Dopey's snacking",
    },
    {
      imgUrl: 'https://source.unsplash.com/LcAZcVWsCIo',
      name: 'Sleepy',
      about: 'ZzzzzzZZzzzz...',
    },
    {
      imgUrl: 'https://source.unsplash.com/HrMD7MngiBE',
      name: 'Sneezy',
      about: 'Ah-choo!',
    },
  ];

  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <h1>Multicats</h1>

      {/* Add your code here 👇 */}

      <Carousel>
        {cats.map((cat) => (
          <Carousel.Item key={cat.name}>
            <img className='w-100' src={cat.imgUrl} alt={cat.name} />
            <Carousel.Caption>
              <h3>{cat.name}</h3>
              <p>{cat.about}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Add your code here ☝️ */}
    </div>
  );
}

export { App };
