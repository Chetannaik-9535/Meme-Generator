// Write your code here

import {Component} from 'react'
import {
  AppContainer,
  MemeInfoContainer,
  Heading,
  Label,
  Input,
  Select,
  CustomButton,
  CustomOption,
  MemeGeneratorForm,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImgUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizesOptionId: fontSizesOptionsList[0].optionId,
    backgroundImgUrl: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onChangeBackgroundImageUrl = event => {
    this.setState({
      backgroundImgUrlInput: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      topTextInput: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomTextInput: event.target.value,
    })
  }

  onChangeActiveFontSizesOptionId = event => {
    this.setState({
      activeFontSizesOptionId: event.target.value,
    })
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImgUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizesOptionId,
    } = this.state

    this.setState({
      backgroundImgUrl: backgroundImgUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activeFontSizesOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      backgroundImgUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizesOptionId,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <Label htmlFor="backgroundImageUrl">Image Url</Label>
        <Input
          type="text"
          id="backgroundImageUrl"
          value={backgroundImgUrlInput}
          onChange={this.onChangeBackgroundImageUrl}
          placeholder="Enter the Image Url"
        />

        <Label htmlFor="topText">Top Text</Label>
        <Input
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />

        <Label htmlFor="bottomText">Bottom Text</Label>
        <Input
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />

        <Label htmlFor="select">Font Size</Label>
        <Select
          id="select"
          value={activeFontSizesOptionId}
          onChange={this.onChangeActiveFontSizesOptionId}
          placeholder="Enter the Font Size"
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </Select>

        <CustomButton type="submit">Generate</CustomButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImgUrl, topText, bottomText, activeFontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImgUrl={backgroundImgUrl}>
        <TextContent activeFontSize={activeFontSize}>{topText}</TextContent>
        <TextContent activeFontSize={activeFontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeInfoContainer>
          <Heading>Meme Generator</Heading>
          {this.renderMemeGeneratorForm()}
        </MemeInfoContainer>
        {this.renderMeme()}
      </AppContainer>
    )
  }
}

export default MemeGenerator
