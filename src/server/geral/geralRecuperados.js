import React from 'react';
import Tabletop from 'tabletop';

import "./styles.css"


class geralRecuperados extends React.Component {
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

      <div>
        {

          data.map(obj => {
            return (
              <div>
                <p>{obj.GeralRecuperados}</p>
              </div>
            )
          })

        }

      </div>

    );
  }
}

export default geralRecuperados;