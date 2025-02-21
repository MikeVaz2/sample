import { createContext, useState, useContext } from "react";
export const defaultConfig = {
    plans: [{
        name: 'Ultra Saving',
        spouseCost: 500,
        employeeCost: 1000,
        dependentCost: 500,
        checksCount: 26,
        cost: (employee, plan) => {
            const checksCount = plan?.checksCount || 26;
            const employeeCost = (plan?.employeeCost ?? 0) / checksCount;
            const employeeDiscount = employee.name[0] === 'A' ? 0.1 : 0;
            const dependentCost = (plan?.dependentCost ?? 0) / checksCount;
            const spouseCost = (plan?.spouseCost ?? 0) / checksCount;
            return employee.dependents.reduce((costs, dependent)=>{
                const discount = dependent.name[0] === 'A' ? 0.1 : 0;
                costs.spouse += dependent === employee.spouse ? spouseCost*(1-discount) : 0; 
                costs.dependents += dependent !== employee.spouse ? dependentCost*(1-discount) : 0;
                return costs;
            }, {employee:employeeCost*(1-employeeDiscount), dependents: 0, spouse: 0})
        }
    }]
}

const ConfigContext = createContext({

}, ()=>{});
  
export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState(defaultConfig);

    const setConfiguration = (newSettings) => {
        setConfig(prev => {
            Object.assign(prev || {},newSettings);
            return {...prev};
        });
    };

    return (
        <ConfigContext.Provider value={{ config, setConfiguration }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => useContext(ConfigContext);