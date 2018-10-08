import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import NumFoto from '../src/components/NumFoto';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('NumFoto', module)
  .addDecorator(StoryRouter())
  .add(
    'NumFoto',
    withInfo(`

    ~~~js
      <NumFoto />
    ~~~

  `)(() => (
      <Docs>
        <NumFoto />
      </Docs>)
  );
