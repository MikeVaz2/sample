import { useConfig } from "../Configuration";
import { Employee } from "../Employees/Employee";
import { Form } from "../Form";
import "./styles.css"


function EditableRow({person, onAction, index, isSpouse}) {
    return <tr key={person.id}><td colSpan="3"><Form isSpouse={isSpouse} person={person} onAction={(action, person) => {
        onAction(`form-${action}`, person, index)
    }}></Form></td></tr> 
}
function Row({person, onAction, index}) {
    return <tr key={person.id} onClick={e=> {
        e.stopPropagation();
        onAction('select', person, index); 
    }}>{person.id !== undefined ? <td>{person.id}</td> : ''}<td>{person.name}</td></tr>;
}
export function List({data, selected, onAction, parent}) {
    const {config} = useConfig();
    Employee.config = config;
    return <section className="list">
        <section className="tools">
            
            <button type="submit" onClick={(e)=>{
                    e.stopPropagation();
                    onAction('add');
                    }} name="action" value="add">Add</button> 
        </section>
        <table>
            <tbody>
                {(data || []).map((person,index) => {
                    return selected === person ? <EditableRow isSpouse={parent?.spouse === person} onAction={onAction} key={index} person={selected} index={index}></EditableRow> : <Row key={index} person={person} onAction={onAction} index={index}></Row>
            })}</tbody>
        </table>
    </section>
}