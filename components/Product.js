const React = require('react')

class Product extends React.Component {
  render() {
    return (
      <div className= "product">
        <ul>
          <li> Name: {this.props.name}</li>
          <li> Producer: {this.props.producer}</li>
          <li> Watermark: {this.props.hasWatermark}</li>
          <li> Color: {this.props.color}</li>
          <li> Name: </li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

const colors = ['white', 'eggshell-white', 'salmon']

function weightCheck (props, propName, componentName) { // all props, weight, product
  if (!props[propName]) {
   return new Error(`should exist`)
  } else if (props[propName] < 80 || props[propName] > 300) {
    return new Error(`should be between 80 and 300`)
  } else if (typeof props[propName] !== 'number') {
    return new Error(`should be a number`)
   }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(colors).isRequired,
  weight: weightCheck
}

  module.exports = Product
