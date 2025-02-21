import{useState} from "react";
import { Employee, Person } from "../Employees/Employee.js";
import { List } from "../List/index.jsx";
import { useConfig } from "../Configuration/index.jsx";
import { Plan } from "../Plan/index.jsx";
import "./styles.css";
export function Form({person, isSpouse, onAction}) {
    const [dependent, setDependent] = useState(null);
    const [updated, setUpdated] = useState(person instanceof Employee ?Object.assign(new Employee(), person) : person);
    const {config} = useConfig();
    const isEmployee = person.dependents !== undefined;
    return <section className="form">
            <section className={isEmployee ? 'employee' : 'dependent'} onClick={e=>
                e.stopPropagation()
            }> 
                <header>{updated.name}</header>
                <section>
                    <p>
                        <label>Name</label>
                        <input type="text" pattern="[a-zA-Z ]+" required name="name" value={updated.name} onInput={(e)=>{
                            setUpdated({...updated, name: e.target.value})
                        }}></input>
                    </p>
                </section>
                <section className="actions">
            <header>Actions</header>
            <section>
            <p>
                <button type="submit" onClick={(e)=>{
                    setDependent(null);
                    onAction?.('save', updated)
            }} value="save">Save</button>
            </p>
            <p>
                <button type="submit" onClick={()=>{
                    setDependent(null);
                    onAction?.('cancel', person)
            }}>Cancel</button>
            </p>

            
            {person.id || !isEmployee ? <p className="danger">
                <button type="submit" onClick={()=>{
                    setDependent(null);
                    onAction?.('delete', person)
            }}>Delete</button> 
            
            </p> : <></>}

            {!isEmployee ? <p> <button className={isSpouse ? "selected" : ''} type="submit" onClick={()=>{
                    setDependent(null);
                    onAction?.('spouse', person)
            }}>Spouse</button></p> : <></>}
            </section>
        </section>
            </section>
  

        {updated.dependents !== undefined ? 
            <section className="dependents">
                <header>Dependents</header>
                <section>
                    <List data={updated.dependents} parent={updated} selected={dependent} onAction={(action, person, index) => {
                        console.log(action)
                    switch (action) {
                        case 'add':
                            updated.dependents = updated.dependents || [];
                            updated.dependents.push(new Person('New dependent'));
                            setUpdated({...updated})
                            setDependent(updated.dependents[updated.dependents.length-1])
                            break;
                        case 'form-delete':
                            console.log({index});
                            updated.spouse =  updated.dependents[index] === updated.spouse ? null : updated.spouse;
                            updated.dependents = (updated.dependents || []).filter((d,i)=>i !== index);
                            setUpdated({...updated});
                            setDependent(null);
                            break;
                        case 'form-save':
                            updated.dependents[index] = person;
                            setUpdated({...updated});
                            setDependent(null);
                            break;
                        case 'form-cancel':
                            setDependent(null);
                            break;
                        case 'form-spouse':
                            updated.spouse = updated.dependents[index] === updated.spouse ? null : updated.dependents[index];
                            setUpdated({...updated});
                            break;
                        case 'select': 
                            setDependent(person);
                    }
                    }}></List>
                </section></section> : <></>}

        
        {isEmployee ? <section className="plans"><header>Plans</header>
        <section>
        {(config.plans || []).map(plan => {
            return <Plan plan={plan} person={updated} onSelect={(newPlan, newLevel)=>{
                setUpdated({...updated, selection: {
                    plan: newPlan == updated.selection?.plan && updated.selection?.level == newLevel ?  null : newPlan,
                    level: newPlan == updated.selection?.plan && updated.selection?.level == newLevel ? null : newLevel,
                }})
            }}></Plan>
        })}</section></section>
        : <></>}


        

    </section>
}