import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Foto from '../src/components/Foto';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Foto', module)
  .addDecorator(StoryRouter())
  .add(
    'Foto',
    withInfo(`

    ~~~js
      <Foto />
    ~~~

  `)(() => (
      <Docs>
        <Foto />
      </Docs>)
  );
