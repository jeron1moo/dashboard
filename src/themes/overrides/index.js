import { merge } from 'lodash';
import Button from './Button';
import Paper from './Paper';

export default (theme) => merge(Button(theme), Paper(theme));
