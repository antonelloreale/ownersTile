import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Status from '../src/components/Status';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Status', module)
  .addDecorator(StoryRouter())
  .add(
    'Status',
    withInfo(`

    ~~~js
      <Status />
    ~~~

  `)(() => (
      <Docs>
        <Status />
      </Docs>)
  );
