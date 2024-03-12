/* main.js */
import { changeText, changeToFunkyColor } from './module.js';

// import the functions here, then uncomment the code below

const header = document.getElementById("header");

changeText(header, "I did it!")
// call changeText here

setInterval(()=> {
  
  // call changeToFunkyColor() here
changeToFunkyColor(header)
}, 200);

////////////////////////////////////

function changeText(domElement, newText) {
    domElement.innerHTML = newText;
  }
  
  function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
  
    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
  }
  
  // use default export syntax below here
  
  export default { 
    changeText: changeText,       
    changeToFunkyColor: changeToFunkyColor 
  }

  /////////////////////////////////////////

  // TODO: Add your import statements here.
import { getRoles, getCompanies } from './modules/salaryData.js';

// TODO: Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => { // For each label...
    // Create the radio input element.
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

function updateResults(){
  // Retrieve the selected company and role.
  const company = document.querySelector('input[name="company"]:checked').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  // If either the company or role is unselected, return.
  if (!company || !role) { return; }

  // TODO: Use the workAroundModule functions to calculate the needed data.
  const averageSalaryByRole = averageSalaryByRole(role);
  const averageSalaryByCompany = averageSalaryByCompany(company);
  const salaryValue = salary(role, company);
  const industryAverageSalary = industryAverageSalary();

  // Render them to the screen.
  document.getElementById('salarySelected').innerText = `The salary for ${role}s at ${company} is \$${salaryValue}`;
  document.getElementById('salaryAverageByRole').innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
  document.getElementById('salaryAverageByCompany').innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById('salaryAverageIndustry').innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}

// Import the necessary functions from the workAroundModule.js file.
import { averageSalaryByRole, averageSalaryByCompany, salary, industryAverageSalary } from './modules/workAroundModule.js';



