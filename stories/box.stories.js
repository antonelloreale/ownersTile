import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Box from '../src/components/Box';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Box', module)
  .addDecorator(StoryRouter())
  .add(
    'Box',
    withInfo(`

    ~~~js
      <Box />
    ~~~

  `)(() => (
      <Docs>
        <Box />
      </Docs>)
  );
