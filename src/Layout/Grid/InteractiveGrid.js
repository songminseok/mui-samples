import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: { height: 240 },
  paper: {
    padding: theme.spacing(2),
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function InteractiveGrid() {
  const classes = useStyles();
  const [direction, setDirection] = React.useState('row');
  const [justify, setJustify] = React.useState('center');
  const [alignItems, setAlignItems] = React.useState('center');

  return <div />;
}
