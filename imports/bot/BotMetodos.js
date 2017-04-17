//import { Bot } from './index.js';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';
var Bot = require('./index.js');
const testCollection = new Mongo.Collection('testCollection');
var userbot={
  "steam_name" : "d2gb0004",
    "steam_user" : "d2gb0004",
    "steam_pass" : "passwordrandom123",
    "steam_guard_code" : "steamGuardCodeIfApplicable"
};
var hola = require('./prueba.js');
var nombre = 'anthony';
//var bothola= new hola(userbot);
var RunBot = new Bot(userbot);
Meteor.startup(() => {
  RunBot.Dota2Bot.steamClient.connect();
  //bothola.steamClient.connect();


});
var botReady=false;
RunBot.Dota2Bot.dota2.on("botReady", function() {
  botReady = true;
  console.log("Bot is ready!");
});

Meteor.methods({
 'userupdate.Dota2profile'(){
    let userId= Meteor.userId();
      if(Meteor.isServer){
    let user=Meteor.users.findOne({_id: userId});

    console.log(dota2Id);
    let steamId=user.gamerProfile.steamId;
    let dota2Id=RunBot.Dota2Bot.dota2.ToAccountID(steamId);
    const stats=RunBot.Dota2Bot.getStats(dota2Id);
    const mmr=RunBot.Dota2Bot.getMMR(dota2Id);
    Meteor.users.update({_id:userId},{$set:{"gamerProfile.dota2profile": stats.toJson()}});
    Meteor.users.update({_id:userId},{$set:{"gamerProfile.dota2profile.MMR": mmr}});
    //Meteor.users.update({_id:userId},{$set:{"gamerProfile.dota2profile.idDota2": dota2Id}});
 }
  }

});
