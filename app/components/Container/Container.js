import React, {Component, PropTypes} from 'react';
import {Platform, View, Image, ActivityIndicator, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import stylePropType from 'react-style-proptype';

import styles from './styles';

class Container extends Component {

  render() {
      const combineBackgroundStyle = StyleSheet.flatten([
        styles.backgroundStyle, this.props.backgroundStyle
      ],);

      if(Platform.OS === 'ios')
      {    
        return (

            <KeyboardAvoidingView behavior='padding' style={{flex:1}} >
              <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()}>
                
                <View style={{flex:1}} {...this.props}>
                  {this.props.bgSource
                    ? <Image style={styles.backgroundStyle} source={this.props.bgSource}/>
                    : null}

                  {this.props.children}

                </View>
          
              </TouchableWithoutFeedback>

              {this.props.loading
                    ? <View style={styles.loadingStyle}>
                        <ActivityIndicator size="large" color="#FFF"/>
                      </View>
                    : null}
            </KeyboardAvoidingView>
          
      );
    }
    else{
      return (
          
            <TouchableWithoutFeedback style={{flex:1}} onPress={() => Keyboard.dismiss()}>
              <KeyboardAvoidingView behavior='padding' style={{flex:1}} >
                
              <View style={{flex:1}} {...this.props}>
                {this.props.bgSource
                  ? <Image style={styles.backgroundStyle} source={this.props.bgSource}/>
                  : null}

                {this.props.children}

                

              </View>
    
              {this.props.loading
                  ? <View style={styles.loadingStyle}>
                      <ActivityIndicator size="large" color="#FFF"/>
                    </View>
                  : null}
                  
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          
      );
    }
  }
}

Container.propTypes = {
  bgSource: PropTypes.node,
  children: PropTypes.node,
  loading: PropTypes.bool,
  backgroundStyle: stylePropType
};

Container.defaultProps = {
  bgSource: null,
  children: null,
  loading: null,
  backgroundStyle: null
};

module.exports = Container;
