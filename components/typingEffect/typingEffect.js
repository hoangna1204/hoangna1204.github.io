import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './TypingEffect.module.css';

class TypingEffect extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    wordsPerSecond: PropTypes.number.isRequired
  };

  static defaultProps = {
    text:
      "Dummy text",
    wordsPerSecond: 20
  };

  state = {
    runningText: "",
    index: 0
  };

  componentDidMount() {
    this.generateText();
  }

  componentDidUpdate() {
    this.generateText();
  }

  generateText = () => {
    //Clear existing time if running
    clearTimeout(this.timer);

    const {runningText, index} = this.state;
    const {text, wordsPerSecond} = this.props;

    //Speed of generting text
    const speed = 1000 / wordsPerSecond;

    if (index < text.length) {
      this.timer = setTimeout(() => {
        this.setState({
          runningText: runningText + text[index],
          index: index + 1
        });
      }, speed);
    } else {
      //Clear timer if generated completely
      clearTimeout(this.timer);
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {runningText} = this.state;

    return (
      <div>
        {runningText}
        <span className={styles.blinkingCursor}/>
      </div>
    );
  }

}

export default TypingEffect;
