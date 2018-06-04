import * as React from 'react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

export class SearchForm extends React.Component {


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
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Словарь</label>
            <Dropdown placeholder='State' fluid multiple search selection options={this.stateOptions}/>
          </Form.Field>
          <Form.Field>
            <Form.Input
              pattern="[1][1-4][0-9][0-9]"
              placeholder='>=1111'
              name='name'
              type={'number'}
              label='Start year'
              value={this.state.firstYearValue}
              onChange={(e: any, { value }: any) => this.onChangeFirstValue(e, value)}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              pattern="[1][1-4][0-9][0-9]"
              placeholder='<=1419'
              name='email'
              type={'number'}
              label='End year'
              value={this.state.secondYearValue}
              onChange={(e: any, { value }: any) => this.onChangeSecondValue(e, value)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field id='form-button-control-public' control={Button} content='Search'
                      onClick={() => this.onClickData()}/>
        </Form.Group>
      </Form>
    );
  }
}
