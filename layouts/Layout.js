import React, { Component } from 'react'
import Header from '../components/Header'
import { body } from '../theme'

const Layout = function(Page) {
  return class Higher extends Component {
    static getInitialProps(ctx) {
      return Page.getInitialProps ? Page.getInitialProps(ctx) : {}
    }

    render() {
      return (
        <div>
          <style jsx>{body}</style>
          <Header />
          <Page {...this.props} />
        </div>
      )
    }
  }
}

export default Layout