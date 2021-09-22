import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchBox from 'components/SearchBox'
import React from 'react'

function MasterLayout(props) {
  return (
    <div>
      <Header />
      <SearchBox />
      {props.children}
      <Footer />
    </div>
  )
}

MasterLayout.propTypes = {

}

export default MasterLayout

