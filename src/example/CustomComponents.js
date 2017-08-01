// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { PragForm } from '../index';
import TextInput from './components/TextInput';

const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+/gi;

const CustomComponents = ({ form }) => (
	<form onSubmit={form.actions.onSubmit} noValidate>
		<h3>Testing</h3>
		<TextInput
			{...form.getFieldProps({ name: 'email', type: 'email' })}
		/>
		<button type='submit'>GO</button>
	</form>
);
CustomComponents.propTypes = {
	form: PropTypes.shape({
		getFieldProps: PropTypes.func,
		action: PropTypes.object,
	})
}

function validate (fields) {
	const errors = {};
	if (!emailRegex.test(fields.email)) {
		errors.email = "Please enter a valid email address";
	}
	return errors;
}

export default PragForm({
	initFields: () => ({ email: '' }),
	submit: (values) => { console.log(values) },
	validate,
})(CustomComponents);