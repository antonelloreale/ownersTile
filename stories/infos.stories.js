import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Infos from '../src/components/Infos';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Infos', module)
  .addDecorator(StoryRouter())
  .add(
    'Infos',
    withInfo(`

    ~~~js
      <Infos />
    ~~~

  `)(() => (
      <Docs>
        <Infos />
      </Docs>)
  );
