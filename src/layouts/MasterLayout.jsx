import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import SearchBox from 'components/SearchBox'
import Footer from 'components/Footer'

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

