const Person = require('./person.js');

module.exports = class Teacher extends Person{

	constructor(firstName,surname,dateOfBirth,gender,subject){
        super(firstName,surname,dateOfBirth,gender);
		this.subject = subject;
    }

	introduction(){
		if(this.gender.toLowerCase() === 'male'){
			return `Hi!, I am Mr ${this.fullName} a ${this.subject} teacher`;
		}
		else{
			return `Hi!, I am Mrs ${this.fullName} a ${this.subject} teacher`;
		}
    }
};