import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { initApplication } from '../store/actions/app.actions';

/**
 * Home page view component.
 */
class Home extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.initApp(true);
    }, 2000);
  }

  render() {
    return (
      <div>
        Home Page <Link to="/other-page">Go to other page</Link>

        <p>
          <b>Application status</b> : {this.props.status}
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  status: PropTypes.string,
  initApp: PropTypes.func
};

const mapStateToProps = state => ({
  status: state.app.isLoaded ? 'Has been initialized' : 'not initialized yet'
});

const mapDispatchToProps = dispatch => ({
  initApp: state => (dispatch(initApplication(state)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
