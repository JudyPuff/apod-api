import React from 'react'
import Apod from './Apod'
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      apodObject: {}
    }
    this.getPhoto = this.getPhoto.bind(this)
  }

  getPhoto () {
    request
      .get('https://api.nasa.gov/planetary/apod?date=2018-02-05&api_key=DEMO_KEY')
      .then(res => {
        this.setState({
          apodObject: res.body
        })
      })
  }

  render () {
    return (
      <div>
        <h1>Astronomy Photo Of Day</h1>
        <button type='button' onClick={this.getPhoto}>Get Photo</button>
        <Apod photo={this.state.apodObject} />
      </div>
    )
  }
}

export default App
