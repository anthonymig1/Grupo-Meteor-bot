import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

export default class Games extends Component{
	constructor(props){
		super(props);
  }
	withSteam(err) {
		err.preventDefault();
		Meteor.loginWithSteam((er)=>{

		}) ;
	}
	dota2profile(e) {
		e.preventDefault();
		Meteor.call('userupdate.Dota2profile',(err)=>{if(err) console.log(err);});
		FlowRouter.go('/home/Games/dota2');
		//  console.log(Meteor.user());
	}

	render(){
		return (
      <div className="row">
        <div className="col s6">
          <button
              onClick={this.withSteam.bind(this)}
            >
              Dota 2
            </button>
        </div>

      <button
          onClick={this.dota2profile.bind(this)}
        >
          Perfil Dota 2
        </button>
      </div>
		)
	}
}
