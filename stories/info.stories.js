import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Info from '../src/components/Info';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Info', module)
  .addDecorator(StoryRouter())
  .add(
    'Info',
    withInfo(`

    ~~~js
      <Info />
    ~~~

  `)(() => (
      <Docs>
        <Info />
      </Docs>)
  );
