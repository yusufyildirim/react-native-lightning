import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import ScalableText from 'react-native-text';

import colors from 'resources/colors';
import constants from 'resources/constants';
import styles from './styles';

class Header extends Component {

  constructor(props){
    super(props)

    this.backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : constants.headerColor;
    
    if(this.props.leftIcon){
      this.leftIcon = this.props.leftIcon
    }
    else if(this.props.menu){
      this.leftIcon = this.props.leftIcon || constants.menuIcon;
    }
    else{
      this.leftIcon = this.props.leftIcon || constants.backIcon
    }
  }

  render() {
    return (

      <View style={styles.topBarContainer} {...this.props} backgroundColor={this.backgroundColor}>
        
        {(Platform.OS === 'ios') ? <View style={styles.statusBar} />
        : null
        }

        <View style={styles.topBar}>

          <TouchableOpacity style={styles.leftIcon} onPress={this.props.onLeftIconPress} >
              { this.leftIcon ? <Image source={this.leftIcon} /> : null }
          </TouchableOpacity>

          <View style={styles.titleArea}>
            {this.props.logo ? <Image source={this.props.logo} /> : null }
            {this.props.title ? <ScalableText style={styles.title}>{this.props.title}</ScalableText> : null}
          </View>

          <TouchableOpacity style={styles.leftIcon} >
              { this.leftIcon ? <Image style={{opacity: 0}} source={this.leftIcon} /> : null }
          </TouchableOpacity>

        </View>
      </View>
      );
  }
}

module.exports = Header;
