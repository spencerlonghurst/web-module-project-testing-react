import React from 'react';
import { render, screen } from '@testing-library/react'; //fireEvent
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
  id: 1,
  name: "",
  image: 'https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg',
  season: 1,
  number: 1,
  summary: 'test SUMMARY',
  runtime: 1
}

const testEpisodeNoImg = {
  id: 1,
  name: "",
  image: null,
  season: 1,
  number: 1,
  summary: 'test SUMMARY',
  runtime: 1
}

test("renders without error", () => {
  render(<Episode episide={testEpisode}/>) 
});


test("renders the summary test passed as prop", () => {
  render(<Episode episide={testEpisode}/>)
  const summary = screen.queryByText('test SUMMARY')
  expect(summary).toBeInTheDocument()
  expect(summary).toBeVisible()
  expect(summary).toBeTruthy()
  expect(summary).toHaveTextContent('test SUMMARY')

});
  
test("renders default image when image is not defined", () => {
  render(<Episode episide={testEpisodeNoImg}/>)
  const image = screen.queryAllByAltText('./stranger_things.png')
  expect(image).toBeInTheDocument()
  expect(image).toBeVisible()
  expect(image).toBeTruthy()
});
  