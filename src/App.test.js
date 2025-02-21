import { render, screen } from '@testing-library/react';
import App from './App';
import { Employee, Person } from './Employees/Employee';
import { defaultConfig } from './Configuration';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

test('Employee', () =>{
  
  let employee = new Employee(1, "Tested", [new Person('Child'), new Person('Son'), new Person('Spouse')]);

  expect(employee).toBeTruthy();
  expect(employee.dependents.length).toBe(3);
  expect(employee.name).toBe('Tested');
  expect(employee.id).toBe(1);


})



test('Plans', () => {
  const config = defaultConfig;
  const employee = new Employee(1, "Tested", [new Person('A Child'), new Person('Son'), new Person('Spouse')]);
  const plan = config.plans[0];
  let costs = plan.cost(employee,plan);
  expect(costs).toBeTruthy();
  expect(costs.spouse).toBe(0);
  expect(~~costs.dependents).toBe(~~(plan.dependentCost*(2.9)/plan.checksCount))
  expect(~~costs.employee).toBe(~~(plan.employeeCost/plan.checksCount))

  // spouse
  employee.spouse = employee.dependents[2];
  costs = plan.cost(employee,plan);
  expect(~~costs.spouse).toBe(~~(plan.spouseCost/plan.checksCount));

  // discount
  employee.name = 'A Employee';
  costs = plan.cost(employee, plan);
  expect(~~costs.employee).toBe(~~(plan.employeeCost*0.9/plan.checksCount))
})
