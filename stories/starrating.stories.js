import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import StarRating from '../src/components/StarRating';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('StarRating', module)
  .addDecorator(StoryRouter())
  .add(
    'StarRating',
    withInfo(`

    ~~~js
      <StarRating />
    ~~~

  `)(() => (
      <Docs>
        <StarRating />
      </Docs>)
  );
