'use strict'

const Person = require('./Person');

module.exports = class Student extends Person{
    constructor(firstName,surname,dateOfBirth,gender,school){
        super(firstName,surname,dateOfBirth,gender);
		this.school = school;
		
	}

	introduction(){
		return `Hi!, I am ${this.fullName} and I am a student of ${this.school}`;
	}
};