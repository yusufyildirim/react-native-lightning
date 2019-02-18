import _ from 'lodash';

const FLEX_KEY_PATTERN = /^flex(G|S)?(-\d*)?$/;
const PADDING_KEY_PATTERN = new RegExp('padding[LTRBHV]?-([0-9]*)');
const MARGIN_KEY_PATTERN = new RegExp('margin[LTRBHV]?-([0-9]*)');
const ALIGNMENT_KEY_PATTERN = /(left|top|right|bottom|center|centerV|centerH|spread)/;

function margin(props) {
  const MARGIN_VARIATIONS = {
    margin: 'margin',
    marginL: 'marginLeft',
    marginT: 'marginTop',
    marginR: 'marginRight',
    marginB: 'marginBottom',
    marginH: 'marginHorizontal',
    marginV: 'marginVertical',
  };

  const margins = {};
  const marginPropsKeys = _.chain(props)
    .keys(props)
    .filter(key => MARGIN_KEY_PATTERN.test(key))
    .value();

  _.forEach(marginPropsKeys, (key) => {
    if (props[key] === true) {
      const [marginKey, marginValue] = key.split('-');
      const paddingVariation = MARGIN_VARIATIONS[marginKey];
      if (!isNaN(marginValue)) {
        margins[paddingVariation] = Number(marginValue);
      }
    }
  });

  return margins;
}

function padding(props) {
  const PADDING_VARIATIONS = {
    padding: 'padding',
    paddingL: 'paddingLeft',
    paddingT: 'paddingTop',
    paddingR: 'paddingRight',
    paddingB: 'paddingBottom',
    paddingH: 'paddingHorizontal',
    paddingV: 'paddingVertical',
  };

  const paddings = {};
  const paddingPropsKeys = _.chain(props)
    .keys(props)
    .filter(key => PADDING_KEY_PATTERN.test(key))
    .value();

  _.forEach(paddingPropsKeys, (key) => {
    if (props[key] === true) {
      const [paddingKey, paddingValue] = key.split('-');
      const paddingVariation = PADDING_VARIATIONS[paddingKey];
      if (!isNaN(paddingValue)) {
        paddings[paddingVariation] = Number(paddingValue);
      }
    }
  });

  return paddings;
}


function alignment(props) {
  const {row, center} = props;
  const alignments = {};

  const alignmentRules = {};
  if (row) {
    alignments.flexDirection = 'row';
    alignmentRules.justifyContent = ['left', 'right', 'centerH', 'spread'];
    alignmentRules.alignItems = ['top', 'bottom', 'centerV'];
  } else {
    alignmentRules.justifyContent = ['top', 'bottom', 'centerV', 'spread'];
    alignmentRules.alignItems = ['left', 'right', 'centerH'];
  }

  _.forEach(alignmentRules, (positions, attribute) => {
    _.forEach(positions, (position) => {
      if (props[position]) {
        if (_.includes(['top', 'left'], position)) {
          alignments[attribute] = 'flex-start';
        } else if (_.includes(['bottom', 'right'], position)) {
          alignments[attribute] = 'flex-end';
        } else if (_.includes(['centerH', 'centerV'], position)) {
          alignments[attribute] = 'center';
        } else if (position === 'spread') {
          alignments[attribute] = 'space-between';
        }
      }
    });
  });

  if (center) {
    alignments.justifyContent = 'center';
    alignments.alignItems = 'center';
  }

  return alignments;
}

function flexStyle(props) {
  const STYLE_KEY_CONVERTERS = {
    flex: 'flex',
    flexG: 'flexGrow',
    flexS: 'flexShrink',
  };
  const flexPropKey = _.chain(props)
    .keys(props)
    .filter(key => FLEX_KEY_PATTERN.test(key))
    .last()
    .value();
  if (flexPropKey && props[flexPropKey] === true) {
    let [flexKey, flexValue] = flexPropKey.split('-');
    flexKey = STYLE_KEY_CONVERTERS[flexKey];
    flexValue = _.isEmpty(flexValue) ? 1 : Number(flexValue);

    return {[flexKey]: flexValue};
  }
}


export default function prepareStyle(props) {

  return {
    ...margin(props),
    ...padding(props),
    ...alignment(props),
    ...flexStyle(props),
  };
}
