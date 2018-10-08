import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';

import Top from '../src/components/Top';

import {Docs} from './styles';
import '../src/global-styles';

storiesOf('Top', module)
  .addDecorator(StoryRouter())
  .add(
    'Top',
    withInfo(`

    ~~~js
      <Top />
    ~~~

  `)(() => (
      <Docs>
        <Top />
      </Docs>)
  );
