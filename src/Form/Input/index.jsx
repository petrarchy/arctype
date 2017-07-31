import React, {
	Component,
	PropTypes
} from 'react';

import {
    intlShape,
    injectIntl
} from 'react-intl';



class Input extends Component {
    render() {
        const { type, intl, value, required, id, onChange, placeholder } = this.props;
        const props = {
            type,
            value,
            required,
            id,
            onChange
        };
        if (placeholder) {
            const { formatMessage } = intl;
            props.placeholder = formatMessage(placeholder);
        }
        return (
            <input
                {...props}
             />
        );
    }
}

Input.propTypes = {
    type: PropTypes.string,
    intl: intlShape.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    required: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.object,
};

Input.defaultProps = {
    inputType: 'text'
};

export default injectIntl(Input);
