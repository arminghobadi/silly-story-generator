import React from 'react'

export class Main extends React.Component {
  state = {
    randomizedStory: ''
  }

  getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  randomizeStory() {
    const insertX = ['Willy the Goblin','Big Daddy','Father Christmas' ];
    const insertY = ['the soup kitchen','Disneyland','the White House'];
    const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
    const story = `It was 94 fahrenheit outside, so ${this.getRandomElementFromArray(insertX)} went for a walk. When they got to ${this.getRandomElementFromArray(insertY)}, they stared in horror for a few moments, then ${this.getRandomElementFromArray(insertZ)} . Bob saw the whole thing, but was not surprised — ${this.getRandomElementFromArray(insertX)} weighs 300 pounds, and it was a hot day.`
    this.setState({ randomizedStory: story })
  }

  render() {

    return (
      <div>
        <input placeholder='insert custom name' value={this.state.customName} onChange={event => this.setState({ customName: event.target.value })} />
        <div>{this.state.randomizedStory}</div>
        <button onClick={() => this.randomizeStory()}>Randomize</button>
      </div>
    )
  }
}