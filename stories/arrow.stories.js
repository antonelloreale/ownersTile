import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Arrow from '../src/components/Arrow';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Arrow', module)
  .addDecorator(StoryRouter())
  .add(
    'Arrow',
    withInfo(`

    ~~~js
      <Arrow />
    ~~~

  `)(() => (
      <Docs>
        <Arrow />
      </Docs>)
  );
