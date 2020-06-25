import React from 'react';
import Tabletop from 'tabletop';


class Data extends React.Component {
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

      <div id="table">
        <div id="title-table">
          <h2>Bairros</h2>
          <h2>Confirmados</h2>
        </div>

     {
       
       data.map(obj => {
         return (
                <div key={obj.title}>
                  <div id="dados-confirmados">
                    <p>{obj.Bairros}</p>
                    <p className="bairros-confi">{obj.Confirmados} Casos confirmados</p>
                    <p>{obj.title}</p>
                  </div>
                </div>
        )
       })
     }

      </div>

    );
  }
}

export default Data;