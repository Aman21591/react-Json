import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DATA from './customdata.json';
import Profile from './component/profile';
import Hobbies from './component/hobbies';

class App extends Component {
  render() {
    return (
      <div>
        <Profile name={this.props.profileData.name}imgUrl={this.props.profileData.imgURL} />
        <Hobbies hobbyList={this.props.profileData.hobbyList}/>
      </div>
    );
  }
}

ReactDOM.render(<App profileData={DATA}/>, document.querySelector('.container'));
export default App;