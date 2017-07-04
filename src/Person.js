'use strict'

module.exports = class Person{
	constructor(firstName,surname,dateOfBirth,gender){
		this.firstName = firstName;
		this.surname = surname;
		this.dateOfBirth = dateOfBirth;
		this.gender =  gender;
		
	}

	get age(){
		return this.calcAge();
	}

	calcAge(){
        let [day,month,year] = this.dateOfBirth.split('/');
        return new Date().getFullYear() - year;
	}

	get fullName(){
		return `${this.surname} ${this.firstName}`; 
	}

	introduction(){
		return ` Hello, I am ${this.fullName}`;
	}

};

