import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const NewUser = (props) => (
  <div>
    <p>NewUser Component!!!!!!!!!!!!!!!!!!</p>
    <Text field={props.fields.heading} />
  </div>
);

export default NewUser;
