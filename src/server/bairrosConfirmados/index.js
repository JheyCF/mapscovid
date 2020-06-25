import React from 'react';
import Tabletop from 'tabletop';

import "./styles.css"


class BairrosConfirm extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1kJlC0oTI0f-fYAobfFwtyv8kGKj-Z3QM9aLPa5kz62c',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (

      <div id="data">

        {

          data.map(obj => {
            return (
              <div className="main-confirmed">
                <div className="barras">
                  <p>{obj.Bairros}</p>
                  <p>{obj.Confirmados} casos</p>
                </div>
              </div>
            )
          })

        }

      </div>

    );
  }
}

export default BairrosConfirm;