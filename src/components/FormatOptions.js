import _ from 'lodash';

function FormatOptions(options) {
  return (
    _.orderBy(_.map(options, (option) => {
      return (
        { label: option, value: option }
      )
    }), ['label'])
  )
}

export default FormatOptions;
