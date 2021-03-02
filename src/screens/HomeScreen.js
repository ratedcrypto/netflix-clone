import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';
import { selectRole } from '../features/roleSlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function HomeScreen() {
  const role = useSelector(selectRole);

  return (
    <>
      {!role ? (
        <Redirect to="/profile" />
      ) : (
        <div className="homeScreen">
          <Nav />

          <Banner />

          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row
            title="Documentaries Movies"
            fetchUrl={requests.fetchDocumentaries}
          />
        </div>
      )}
    </>
  );
}

export default HomeScreen;