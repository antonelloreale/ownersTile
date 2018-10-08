import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Prezzo from '../src/components/Prezzo';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Prezzo', module)
  .addDecorator(StoryRouter())
  .add(
    'Prezzo',
    withInfo(`

    ~~~js
      <Prezzo />
    ~~~

  `)(() => (
      <Docs>
        <Prezzo />
      </Docs>)
  );
