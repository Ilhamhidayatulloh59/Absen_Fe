import React, { Component } from 'react'
import QRScan from 'qrscan'
import { Box, Center, Flex } from '@chakra-ui/layout'

class Scanner extends Component {
  
  constructor (props) {
    super(props)
    this.state = { value: '', watching: false }
    this.onFind = this.onFind.bind(this)
  }
  
  onFind (value) {
    this.setState({ value, watching: false })
  }
  
  render () {
    return (
        <Center>

      <Box>
        <h1>QRScan Demo</h1>
        {this.state.watching
          ? (
            <Flex>
                <QRScan onFind={this.onFind} />
            </Flex>
          )
          : (
            <Box>
              <button onClick={() => this.setState({ watching: true })}>Scan</button>
              <h4>value: {this.state.value}</h4>
            </Box>
          )
        }
      </Box>
        </Center>
    )
  }
}

export default Scanner