import {useState, useEffect} from "react";
import { useConfig } from "../Configuration";
import { Employee, Person } from "./Employee";
let Employees = [
    new Employee(1,"Mike Johnson"), 
    new Employee(2, "Eli White", [new Person('Nick White'), new Person('Helen White')])
];
export function useEmployees(params) {
    const {config} = useConfig();
    Employee.config = config;
    const [results, setResults] = useState({
        error: false,
        loading: false,
        data: null,
        actions: {
            remove: (employee) => {
                Employees = Employees.filter(e=>e.id !== employee.id);
                setResults({...results, data: [...Employees]});
            },

            update: (employee)=> {
                let target = Employees.find(e=>e.id === employee.id);
                if (!target) {
                    employee.id = Employees.length + 1;
                    Employees.push(employee);
                } else {
                    Object.assign(target, employee);
                }
                
                setResults({...results, data: [...Employees]});
            },
            
        }
    });


    useEffect(()=>{
        setResults({...results, data: [...Employees]})
    }, [params]);

    return results;
}
