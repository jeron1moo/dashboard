import { merge } from 'lodash';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import List from './List';
import Others from './Others';
import Paper from './Paper';

export default (theme) =>
  merge(
    Button(theme),
    Paper(theme),
    Card(theme),
    Input(theme),
    List(theme),
    Others(theme)
  );
