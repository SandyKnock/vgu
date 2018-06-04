import * as React from 'react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import { MenuVGU } from 'app/components/menu/Menu';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

export class HeaderVGU extends React.Component {


  render() {
    return (
        <Header
          as='h2'
          block
          size='medium'
        >
          <Header.Content>
            History Sources Massive Search System
          </Header.Content>
          <Divider inverted />
          <Header.Subheader>
            <MenuVGU/>
          </Header.Subheader>
        </Header>
    );
  }
}
