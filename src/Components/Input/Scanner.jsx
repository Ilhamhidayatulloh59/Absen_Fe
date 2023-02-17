import React, { Component } from 'react'
import QRScan from 'qrscan'
import { Box, Center, Flex } from '@chakra-ui/layout'

class Scanner extends Component {
  
  constructor (props) {
    super(props)
    this.state = { value: '', watching: true }
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
            <Flex justify='center' w='90vw' h='40vh' overflow='hidden'>
                <QRScan onFind={this.onFind} />
            </Flex>
          )
          : (
            <Box>
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