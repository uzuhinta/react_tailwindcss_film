import Footer from 'components/Footer';
import Header from 'components/Header';
import SearchBox from 'components/SearchBox';
import TypePage from 'Pages/TypePage';
import HomePage from 'Pages/HomePage';
import React from 'react';
// import 'tailwindcss/tailwind.css';

function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <TypePage />
      <Footer />
    </>
  );
}

export default App;
