import React, {Component} from 'react';
import MapWithControlledZoom from "./ControlledMap";
import ArrowRightFa from 'react-icons/lib/fa/arrow-right'
import ArrowDownFa from 'react-icons/lib/fa/arrow-down'

class VitMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.addressData,
      menuItems: ['AnyPrice', 'Any Beds', 'Any Bath', 'More filters'],
      isOpen: false,
      activeItemId: '',
      tableFlag: true
    };


  }

  onToggleButton(id, e) {
    e.preventDefault();
    console.log(id);
    this.setState({
      activeItemId: id !== this.state.activeItemId ? id : null
    });


    console.log(this.state.isOpen);
    console.log(this.state.activeItemId);
  }

  onChooseTableStyle(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      tableFlag: true
    })
  }

  onChooseListStyle(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      tableFlag: false
    })
  }

  render() {
    let menuList = this.state.menuItems;
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-12">
            <div className='v-map_filters'>
              <section>
                <input type="text" placeholder='search'/>
                <button>search</button>
              </section>
              {
                menuList.map((item, index) =>
                  <div
                    className='v-map_filters-content-wrapper'
                    key={index}>
                    <button
                      className='v-map_filters-button'
                      onClick={this.onToggleButton.bind(this, index)}
                    >
                      <span>{item}</span>
                      {
                        this.state.activeItemId !== index ?
                          <ArrowRightFa/> :
                          <ArrowDownFa/>
                      }

                    </button>
                    {
                      (this.state.activeItemId === index) ?
                        <div
                          className='v-map_filters-content'
                        >
                          {index} ddddddddd
                        </div> : ''
                    }


                  </div>
                )
              }

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <MapWithControlledZoom address={this.state.address}/>
          </div>

          <div className="col-xs-6">
            <div className='v-map_sidebar'>
              <div className='v-map_sidebar-list-wrapper'>
                <section className="v-map_sidebar-header">
                  <span>100 Homes</span>
                  <div>
                    <span>Sort by</span>
                    <select name="" id="">
                      <option value="1">option1</option>
                      <option value="2">option2</option>
                      <option value="3">option3</option>
                      <option value="4">option4</option>
                    </select>
                  </div>
                  <span
                    onClick={(e) => this.onChooseTableStyle(e)}
                    id='button_table'
                  >table </span>
                  <span
                    onClick={(e) => this.onChooseListStyle(e)}
                    id='button_list'
                  >list </span>
                </section>
                {
                  this.state.tableFlag ?
                    <ul className='v-map_sidebar-list'>
                      {
                        this.state.address.map((element, index) =>
                          <li key={index} className='v-map_sidebar-item'>
                            <a href="#">
                              <div className='v-map_sidebar-img-wrapper'>
                                <img
                                  src="http://z500.com.ua/thumbs/700x526s20tr1/-FilesZ500-res-wizualizacje-Zx24-Zx24_view1_jpg.jpg"
                                  alt=""/>
                              </div>
                              <div className='v-map_sidebar-item-body'>
                                <span>Adress{index + 1}</span>
                                <span>wewesss</span>
                                <span>ssdsdsd</span>
                                <span>112345676</span>
                                <div>
                                  <button>Button0</button>
                                  <button>Button3</button>
                                </div>
                              </div>
                            </a>
                          </li>
                        )
                      }
                    </ul> :
                    <ul className='v-map_sidebar-list'>
                      {
                        this.state.address.map((element, index) =>
                          <li key={index} className='v-map_sidebar-item--list'>
                            <a href="#">
                              <div className='v-map_sidebar-img-wrapper'>
                                <img
                                  src="http://z500.com.ua/thumbs/700x526s20tr1/-FilesZ500-res-wizualizacje-Zx24-Zx24_view1_jpg.jpg"
                                  alt=""/>
                              </div>
                              <div className='v-map_sidebar-item-body'>
                                <span>Adress{index + 1}</span>
                                <span>wewesss</span>
                                <span>ssdsdsd</span>
                                <span>112345676</span>
                                <div>
                                  <button>Button0</button>
                                  <button>Button3</button>
                                </div>
                              </div>
                            </a>
                          </li>
                        )
                      }
                    </ul>
                }

              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default VitMap;