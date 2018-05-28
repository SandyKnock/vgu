import * as React from 'react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

export class RootContainer extends React.Component {

  state = {
    firstYearValue: '',
    secondYearValue: ''
  };

  onChangeFirstValue(e: any, value: string) {
    if (typeof value === 'string') {
      this.setState({
        firstYearValue: value
      });
    }
  }

  onChangeSecondValue(e: any, value: string) {
    if (typeof value === 'string') {
      this.setState({
        secondYearValue: value
      });
    }
  }

  stateOptions = [
    {
      key: 'Орда',
      value: 'Орда',
      text: 'Орда'
    },
    {
      key: 'Хан',
      value: 'Хан',
      text: 'Хан'
    },
    {
      key: 'Дань',
      value: 'Дань',
      text: 'Дань'
    },
    {
      key: 'Плен',
      value: 'Плен',
      text: 'Плен'
    },
    {
      key: 'Прах',
      value: 'Прах',
      text: 'Прах'
    },
    {
      key: 'Враг',
      value: 'Враг',
      text: 'Враг'
    }

  ];

  onClickData() {
    if ((Number(this.state.firstYearValue) < 1111 && Number(this.state.firstYearValue) < 1418)
      || (Number(this.state.secondYearValue) > 1419 && Number(this.state.secondYearValue) < 1112)
      || Number(this.state.firstYearValue) === null
      || Number(this.state.secondYearValue) === null) {
      alert('ОШИБКА');
    }
  }

  render() {
    return (
      <Container textAlign="justified" fluid={true}>
        <Header
          as='h3'
          block
          image='https://edu.vsu.ru/pluginfile.php?file=/122919/block_html/content/gerb.gif'
          content='History Sources Massive Search System'
        >
        </Header>
        <Container textAlign="justified">
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                pattern="[1][1-4][0-9][0-9]"
                placeholder='>=1111'
                name='name'
                type={'number'}
                label='Start year'
                value={this.state.firstYearValue}
                onChange={(e: any, { value }: any) => this.onChangeFirstValue(e, value)}/>
              <Form.Input
                pattern="[1][1-4][0-9][0-9]"
                placeholder='<=1419'
                name='email'
                type={'number'}
                label='End year'
                value={this.state.secondYearValue}
                onChange={(e: any, { value }: any) => this.onChangeSecondValue(e, value)}/>
            </Form.Group>
            <Grid>
              <Grid.Column width={16}>
                <Dropdown placeholder='State' fluid multiple search selection options={this.stateOptions}/>
              </Grid.Column>
              <Grid.Column width={16}>
                <Form.Field id='form-button-control-public' control={Button} content='Search'
                            onClick={() => this.onClickData()}/>
              </Grid.Column>
            </Grid>
          </Form>
        </Container>
      </Container>
    );
  }
}
