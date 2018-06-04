import * as React from 'react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import { HeaderVGU } from 'app/components/header/Header';
import { SearchForm } from 'app/components/search/SearchForm';
// import { PaginationVGU } from 'app/components/pagination/PaginationVGU';

export class RootContainer extends React.Component {

  render() {
    return (
      <Container textAlign="justified" fluid={true}>
        <HeaderVGU/>
        <Container textAlign="justified">
          <SearchForm/>
          {/*<PaginationVGU/>*/}
        </Container>
      </Container>
    );
  }
}
