import {DEFAULT_USERNAME, DEMO_USERNAME, VALID_USERNAME, VALID_PASSWORD} from './constants';

export const username = {
    default: DEFAULT_USERNAME,
    demo: DEMO_USERNAME,
    valid_desc: VALID_USERNAME,
    valid_pattern:
        /^[a-zA-Z][a-zA-Z0-9]{(username.valid_min - 1),(username.valid_max - 1)}$/,
    valid_min: 3,
    valid_max: 16
};

export const password = {
    default : '4dm1npa$$',
    demo : 'd3m0pa$$',
    valid_desc : VALID_PASSWORD,
    valid_regex :
        /(?=^.{password.valid_min,password.valid_max}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    valid_min : 8,
    valid_max : 64
};

/* Pseudocode for validation
if (username.valid_min > username.length || username.length > username.valid_max) {
    show username.valid_desc
}

if

*/
