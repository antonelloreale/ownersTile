import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Accord from '../src/components/Accord';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Accord', module)
  .addDecorator(StoryRouter())
  .add(
    'Accord',
    withInfo(`

    ~~~js
      <Accord />
    ~~~

  `)(() => (
      <Docs>
        <Accord />
      </Docs>)
  );
