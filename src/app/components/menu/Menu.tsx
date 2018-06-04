import * as React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input/Input';

export class MenuVGU extends React.Component {
  state = { activeItem: 'bio' };


  handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name });


  render() {
    const { activeItem } = this.state;
    return (
      <Menu  stackable >
        <Menu.Item>
          <img src='https://edu.vsu.ru/pluginfile.php?file=/122919/block_html/content/gerb.gif' />
        </Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item name='sources' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
        <Menu.Item name='about' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
        <Menu.Menu position='right'>
          <Menu.Item >
            <Input action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
