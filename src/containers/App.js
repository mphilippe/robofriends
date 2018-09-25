import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import { setSearch } from '../actions/search';
import { requestRobots } from '../actions/robots';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, isPending, error, search, onSearchChange } = this.props;
    console.log(robots);
    const filteredRobots = robots.filter((robot) => (
      robot.name.toLowerCase().includes(search.toLocaleLowerCase())
    ));
    return (isPending) ? (
      <h1>Loading...</h1>
    ) : (
      <div className='tc'>
        <Header />
        <SearchBox search={search} onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} error={error} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  ...state.robots,
  ...state.search
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearch(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
