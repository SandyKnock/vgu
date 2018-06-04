import * as React from 'react';
import Pagination from 'semantic-ui-react/dist/commonjs/addons/Pagination/Pagination';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';

export class PaginationVGU extends React.Component {

  render() {
    return (
      <Grid>
        <Grid.Row columns={2} >
          <Grid.Column>
            {/*<Segment>Mobile</Segment>*/}
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Pagination defaultActivePage={5} totalPages={10} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
