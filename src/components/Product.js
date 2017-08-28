import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
	render(){
		return (
		<div>
		</div>
	)};
};

Product.defaultProps = {
	hasWatermark: false
};

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
	weight: weightRange
};


function weightRange(props, propName, componentName) {
	if (props[propName]) {
		if (typeof props[propName] === "number") {
		    if (props[propName] < 80 || props[propName] > 300) {
		      return new Error(
		        'Prop`' + propName + '` supplied to' +
		        ' `' + componentName + '` must be between 80 and 300. Validation failed.'
		      );
		    } 
		} else {
			return new Error('Prop `' + propName + '` supplied to' +
		        ' `' + componentName + '` must be a number. Validation failed.')
		}
	} else {
		return new Error(componentName + ' must have "' + 
			propName + '" property. Validation failed');
	}
   }

