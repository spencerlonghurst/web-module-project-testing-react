import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const exampleData = {
  name: 'test show',
  summary: 'test summary',
  seasons: [
    {id: 0, name: 'Season 1', episodes: []},
    {id: 1, name: 'Season 2', episodes: []},
    {id: 2, name: 'Season 3', episodes: []},
    {id: 3, name: 'Season 4', episodes: []},
  ],
}


test('renders without errors', () => { });
  render( <Show show={exampleData} selectedSeason={'none'}/>)

test('renders Loading component when prop show is null', () => { 
  render(<Show show={null} />)
  const loading = screen.queryByTestId('loading-container')
  expect(loading).toBeInTheDocument()
});
  
test('renders same number of options seasons are passed in', () => { 
  render( <Show show={exampleData} selectedSeason={'none'}/>)
  const seasonsOptions = screen.getAllByTestId('season-option')
  expect(seasonsOptions).toHaveLength(4); //IT SAYS I NEED 8?
});
  

test('handleSelect is called when an season is selected', () => { 
  const handleSelect = jest.fn()
  render( <Show show={exampleData} selectedSeason={'none'} handleSelect={handleSelect}/>)
  const select = screen.getByLabelText('Select A Season')
  fireEvent.selectOptions(select, [1]); // WHERE DOES USEREVENT COME FROM?
  
  expect(handleSelect).toBeCalled(); 
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });
  const { rerender } = render( <Show show={exampleData} selectedSeason={'none'}/>)
  let episodes = screen.queryByTestId('episodes-container')
  expect(episodes).not.toBeInTheDocument()

  rerender(<Show show={exampleData} selectedSeason={1}/>)
  episodes = screen.queryByTestId('episodes-container')
  expect(episodes).toBeInTheDocument()