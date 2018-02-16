import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import ChatlistBox from './ChatlistBox'
import { getChatData } from '../api'

class ChatApp extends React.Component {
  state= { data: null }
  componentWillMount() {
    getChatData().then((res) => {
      const { data } = res
      this.setState(() => ({ data }))
    }).catch(e => console.log('api err', e.message))
  }
  render() {
    const { data } = this.state
    return (
      <Row>
        <Col offset={1} span={22}>
          {data ? <ChatlistBox data={data} /> : null}

        </Col>
      </Row>
    )
  }
}

export default ChatApp
