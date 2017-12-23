import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { colors, translation } from 'resources';
import { en, tr } from 'resources/translations';

import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.renderText = this.renderText.bind(this);

    switch (this.props.type) {
      case 'TITLE':
        this.inlineStyle = { ...styles.title }; // Immutable
        break;

      default:
        // TEXT
        this.inlineStyle = { ...styles.text }; // Immutable
        break;
    }

    if (this.props.color !== '') {
      this.inlineStyle.color = colors[this.props.color];
    }

    if (this.props.fontSize > 0) {
      this.inlineStyle.fontSize = this.props.fontSize;
    }

    /* **** FONT WEIGHT **** */

    switch (this.props.fontWeight) {
      case 'light':
        this.inlineStyle.fontWeight = '300';
        break;

      case 'normal':
        this.inlineStyle.fontWeight = '400';
        break;

      case 'semibold':
        this.inlineStyle.fontWeight = '500';
        break;

      case 'bold':
        this.inlineStyle.fontWeight = '700';
        break;

      default:
        this.inlineStyle.fontWeight = '400';
        break;
    }
  }

  renderText() {
    /* **** TEXT DATA **** */
    this.text = this.props.children;

    if (this.props.translation) {
      if (this.props.translation in en || this.props.translation in tr) {
        this.text = translation.t(this.props.translation, this.props.translationData);
      } else {
        this.text = this.props.translation;
      }
    }

    /* **** CASE **** */

    switch (this.props.case) {
      case 'upper':
        this.text = this.text.toLocaleUpperCase();
        break;

      case 'lower':
        this.text = this.text.toLocaleLowerCase();
        break;

      case 'capitalized':
        break;

      case 'sentence':
        break;

      default:
        break;
    }

    return this.text;
  }

  render() {
    return (
      <Text {...this.props} style={[this.props.style, this.inlineStyle]}>
        {this.renderText()}
      </Text>
    );
  }
}

MyComponent.propTypes = {
  type: PropTypes.oneOf(['TEXT', 'TITLE', 'CAPTION']),
  translation: PropTypes.string,
  translationData: PropTypes.object,
  children: PropTypes.any,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  case: PropTypes.oneOf(['upper', 'lower', 'capitalized', 'sentence']),
  style: PropTypes.any,
};

MyComponent.defaultProps = {
  type: 'TEXT',
  translation: null,
  translationData: {},
  children: null,
  color: '',
  fontSize: 0,
  fontWeight: 'normal',
  case: null,
  style: {},
};

export default MyComponent;
