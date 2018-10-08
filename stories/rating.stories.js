import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Rating from '../src/components/Rating';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Rating', module)
  .addDecorator(StoryRouter())
  .add(
    'Rating',
    withInfo(`

    ~~~js
      <Rating />
    ~~~

  `)(() => (
      <Docs>
        <Rating />
      </Docs>)
  );
