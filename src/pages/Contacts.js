import React, { Component } from 'react'
import Header from '../components/Header';
import Contacts from '../components/Contacts'

class PageTwo extends Component {
	state = {
        contacts: []
      }

      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

	render() {
        return (
        <div className="container">
        	<Header text="Contact List"/>
          	<Contacts contacts={this.state.contacts} />
        </div>
        )
      }

}
export default PageTwo