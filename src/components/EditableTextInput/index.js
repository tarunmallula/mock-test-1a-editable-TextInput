import {Component} from 'react'

import {
  BgContainer,
  Card,
  Heading,
  Content,
  Input,
  Text,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    isText: false,
    text: '',
  }

  onChangeInput = event => {
    this.setState({
      text: event.target.value,
    })
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isText: !prevState.isText,
    }))
  }

  render() {
    const {text, isText} = this.state
    const renderElement = isText ? (
      <Text>{text}</Text>
    ) : (
      <Input type="text" value={text} onChange={this.onChangeInput} />
    )
    return (
      <BgContainer>
        <Card>
          <Heading>Editable Text Input</Heading>
          <Content>
            {renderElement}
            <Button as="button" onClick={this.onClickButton}>
              {isText ? 'Edit' : 'Save'}
            </Button>
          </Content>
        </Card>
      </BgContainer>
    )
  }
}

export default EditableTextInput
