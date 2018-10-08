import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Stato from '../src/components/Stato';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Stato', module)
  .addDecorator(StoryRouter())
  .add(
    'Stato',
    withInfo(`

    ~~~js
      <Stato />
    ~~~

  `)(() => (
      <Docs>
        <Stato />
      </Docs>)
  );
