import React, { Component } from 'react';
import {
  Platform,
  View,
  DatePickerIOS,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { translation, images } from 'resources';
import Image from '../Image';
import Text from '../Text';
import DialogBox from '../DialogBox';
import TouchableOpacity from '../TouchableOpacity';

import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDateVisible: false,
      isTimeVisible: false,
      date: new Date(),
      time: new Date(),
      value: this.props.placeholder
        ? translation.t(this.props.placeholder)
        : '',
    };

    this.dateDialogButtons = [
      {
        translation: 'done',
        color: 'primary',
        textColor: 'white',
        onPress: () => {
          if (this.props.mode === 'date') {
            this.setState({ isDateVisible: false });
            this.onSubmit();
          } else if (this.props.mode === 'datetime') {
            this.setState({ isDateVisible: false, isTimeVisible: true });
          }
        },
      },
    ];

    this.timeDialogButtons = [
      {
        translation: 'done',
        color: 'primary',
        textColor: 'white',
        onPress: () => {
          if (this.props.mode === 'datetime') {
            const date = this.state.date;
            const time = this.state.time;
            this.setState({ isDateVisible: false, isTimeVisible: false });
            this.onSubmit();
          } else {
            this.setState({ isDateVisible: false, isTimeVisible: false });
            this.onSubmit();
          }
        },
      },
    ];

    this.renderIOSDatePicker = this.renderIOSDatePicker.bind(this);
    this.renderIOSTimePicker = this.renderIOSTimePicker.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue(value) {
    this.setState({ value });
  }

  onSubmit() {
    let format = this.props.format;

    if (this.props.mode === 'datetime') {
      format = 'DD/MM/YYYY HH:mm';
    } else if (this.props.mode === 'time') {
      format = 'HH:mm';
    }

    const value = moment(this.state.date)
      .set({
        hour: this.state.time.getHours(),
        minute: this.state.time.getMinutes(),
      });

    this.setState({ value: value.format(format) });
    this.props.onChange(value.format(format), value);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onTimeChange(time) {
    this.setState({ time });
  }

  renderIOSDatePicker() {
    return (
      <DialogBox
        visible={this.state.isDateVisible}
        buttons={this.dateDialogButtons}
      >
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />
      </DialogBox>
    );
  }

  renderIOSTimePicker() {
    return (
      <DialogBox
        visible={this.state.isTimeVisible}
        buttons={this.timeDialogButtons}
      >
        <DatePickerIOS
          date={this.state.time}
          mode="time"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onTimeChange}
        />
      </DialogBox>
    );
  }

  async onPress() {
    if (Platform.OS === 'ios') {
      if (this.props.mode === 'date' || this.props.mode === 'datetime') {
        this.setState({ isDateVisible: true });
      } else {
        this.setState({ isTimeVisible: true });
      }
    } else {
      try {
        if (this.props.mode === 'date' || this.props.mode === 'datetime') {
          const { action, year, month, day } = await DatePickerAndroid.open({
            date: this.state.date,
            mode: 'spinner',
          });
          this.onDateChange(new Date(year, month, day, 0, 0, 0, 0));

          if (
            !this.props.mode === 'datetime' &&
            action !== DatePickerAndroid.dismissedAction
          ) {
            this.onSubmit();
          }

          if (this.props.mode === 'datetime') {
            const { action, hour, minute } = await TimePickerAndroid.open({
              hour: 0,
              minute: 0,
              is24Hour: true,
            });
            this.onTimeChange(new Date(0, 0, 0, hour, minute, 0, 0));

            if (action !== TimePickerAndroid.dismissedAction) {
              this.onSubmit();
            }
          }
        } else {
          const { action, hour, minute } = await TimePickerAndroid.open({
            hour: 0,
            minute: 0,
            is24Hour: true,
          });
          this.onTimeChange(new Date(0, 0, 0, hour, minute, 0, 0));

          if (action !== TimePickerAndroid.dismissedAction) {
            this.onSubmit();
          }
        }
      } catch (err) {}
    }
  }

  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onPress}
      >
        {this.props.title
          ? <Text
              translation={this.props.title}
              style={styles.title}
              case="upper"
              fontWeight="semibold"
            />
          : null}
        <View style={styles.innerContainer}>
          <Text numberOfLines={1} style={styles.text}>
            {this.state.value}
          </Text>
          <Image source={images.calenderIcon} />
        </View>

        {this.renderIOSDatePicker()}
        {this.renderIOSTimePicker()}
      </TouchableOpacity>
    );
  }
}

MyComponent.propTypes = {
  mode: PropTypes.oneOf(['date', 'datetime', 'time']),
  format: PropTypes.string,
  disabled: PropTypes.bool,
};
MyComponent.defaultProps = {
  mode: 'date',
  format: 'DD/MM/YYYY',
  disabled: false,
};

export default MyComponent;
