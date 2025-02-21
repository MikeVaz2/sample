import './App.css';
import { useState } from 'react';
import { List } from './List';
import { Form } from './Form';
import { ConfigProvider, useConfig } from './Configuration';
import { useEmployees } from './Employees';
import { Employee, Person } from './Employees/Employee';
function App() {
  const [employee, setEmployee] = useState(null);
  const [dependent, setDependent] = useState(null);
  const {loading, error, data, actions} = useEmployees();
  return (
    <ConfigProvider>
      {(employee) ? <Form person={employee} parent={dependent ? employee : null} onAction={(action, person) => {
            const isEmployee = person instanceof Employee;
            console.log({person, isEmployee})
            switch (action) {
                case 'cancel':
                  setEmployee(null);
                  break;
                case 'save':
                    actions.update(person);
                    setEmployee(null);
                    break;
                case 'delete':
                    actions.remove(person);
                    setEmployee(null);
                    break;
                case 'add-dependent':
                    break;
                case 'select-dependent':
                    setDependent(person);
                    break;
                case 'cancel-dependent':
                  alert(1);
                    setDependent(null);
                    break;
            }
            console.log({action, person});
        }}></Form> : 
      <List data={data} onAction={(action, person) => {
        switch (action) {
          case 'add': 
              setEmployee(new Employee('', 'New'));
              break;
          case 'select':
              setEmployee(person);
              break;
        }
      }}></List> }
    </ConfigProvider>
  );
}

export default App;
