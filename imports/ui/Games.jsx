import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

export const numGames = 5;

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
		Meteor.call('dota2bot.updateDota2Profile',(err)=>{if(err) console.log(err);});
		FlowRouter.go('/home/Games/dota2');
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
