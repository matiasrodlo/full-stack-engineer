class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);
console.log(surgeonRomero.takeVacationDays(3));
console.log(surgeonRomero.remainingVacationDays());

////////////////////////////////////////////////////////////////////////

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

 takeVacationDays(days) {
    if (days <= this._remainingVacationDays) {
      this._remainingVacationDays -= days;
      console.log(`${this._name} took ${days} vacation day(s). Remaining vacation days: ${this._remainingVacationDays}`);
    } else {
      console.log(`Not enough remaining vacation days for ${this._name}.`);
    }
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  addCertification(certification) {
    this._certifications.push(certification);
    console.log(`${this._name} added certification: ${certification}`);
  }
}