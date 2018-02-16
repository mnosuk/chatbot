import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ChatList from './ChatList'

const ChatListBoxWrapper = styled.div`
  width: 100%;
  height: 700px;
  background-color: #EFEFE8;
`

class ChatlistBox extends React.Component {
  getDataComponent = aData => (<ChatList key={aData.id} owner={aData.owner} text={aData.message} />)
  render() {
    const { data } = this.props
    return (
      <ChatListBoxWrapper>
        {
          data.map(this.getDataComponent).slice(-5)
        }
      </ChatListBoxWrapper>
    )
  }
}

export default ChatlistBox
ChatlistBox.propTypes = {
  data: PropTypes.array.isRequired,
}
