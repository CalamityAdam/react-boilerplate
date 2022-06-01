import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const cityApi =
  'https://gist.githubusercontent.com/CalamityAdam/914dc118289b4b40f1f2adeacc8c445e/raw/57870057da789cfcbaa59f63b3718ac7e5e69008/cities.json';

function App() {
  const [placesRaw, setPlacesRaw] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    fetch(cityApi)
      .then((res) => res.json())
      .then((data) => {
        // store the "master" list of places
        setPlacesRaw(data);
        // initialize filtered list to the full list
        setFilteredPlaces(data);
      });
  }, []);

  function handleChange(e) {
    // grab input value
    const value = e.target.value;
    // regex to match input value
    const regex = new RegExp(value, 'gi');
    // filter matches from placesRaw
    const filtered = placesRaw.filter((place) => {
      return place.name.match(regex) || place.state.match(regex);
    });

    // set filteredPlaces to matches
    setFilteredPlaces(filtered);
  }

  return (
    <Container>
      <Box display='flex' p={3}>
        <TextField
          onChange={handleChange}
          label='City or State'
          sx={{ mx: 'auto' }}
        />
      </Box>

      {/* Add your code here 👇 */}

      {filteredPlaces.map(({ name, population, state }) => (
        <Accordion key={name}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              {name}, {state}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {name} has a population of {population}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Add your code here ☝️ */}
    </Container>
  );
}

export { App };
