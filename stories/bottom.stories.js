import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Bottom from '../src/components/Bottom';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Bottom', module)
  .addDecorator(StoryRouter())
  .add(
    'Bottom',
    withInfo(`

    ~~~js
      <Bottom />
    ~~~

  `)(() => (
      <Docs>
        <Bottom />
      </Docs>)
  );
