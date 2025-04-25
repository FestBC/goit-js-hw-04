"use strict";

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName; //changes username.
  },

  updatePlayTime(hours) {
    this.playTime += hours; //adds hours to playtime.
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`; //returns profile's username and its playtime.
  }
};

console.log("//Start of task 3.");


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"


console.log("//End of task 3.");