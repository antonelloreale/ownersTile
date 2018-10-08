import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Address from '../src/components/Address';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Address', module)
  .addDecorator(StoryRouter())
  .add(
    'Address',
    withInfo(`

    ~~~js
      <Address />
    ~~~

  `)(() => (
      <Docs>
        <Address />
      </Docs>)
  );
