import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import ChatlistBox from './ChatlistBox'
import MessageBox from './MessageBox'
import { refreshChatbox, donePostChatbox } from '../utils/RestChat'
import { postChatData } from '../api'

class ChatApp extends React.Component {
  state= { data: null }


  async componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const data = await refreshChatbox()
    this.setState(() => ({ data }))
  }

  postData = async (obj) => {
    const status = await donePostChatbox(obj)
    this.fetchData()
    console.log(status)
  }

  render() {
    const { data } = this.state
    return (
      <Row>
        <Col offset={1} span={22}>
          {
            data ?
              <div>
                <ChatlistBox data={data} />
                <MessageBox createChatData={this.postData} />
              </div>
          :
          null
        }

        </Col>
      </Row>
    )
  }
}

export default ChatApp
