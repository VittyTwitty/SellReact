import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.textContent)

  }


  render() {
    const {
      year,
      photos,
      fetching
    } = this.props;
    return (
      <div>
        <h3>Year now {year}</h3>
        <button onClick={this.onYearBtnClick.bind(this)}>2018</button>
        {
          fetching ?
            <p>Loading...</p> :
            <p>Now is {photos.length} photos.</p>
        }
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,

};
export default Page;