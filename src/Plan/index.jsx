import "./styles.css"
export function Cost({value}) {
    return <b>${Math.round(value)}</b>
}

export function Plan({plan, person, onSelect}) {
    const costs = plan.cost(person,plan);
    const isSelected = person.selection?.plan === plan;
    return <section class="plan">
    <header>{plan.name}</header>
    <section>
    <p><button onClick={()=>onSelect?.(plan, 0)} className={isSelected && person.selection?.level === 0 ? `selected`: ``}>Employee only</button><Cost value={costs.employee}/></p>

    {person.spouse ? <p><button onClick={()=>onSelect?.(plan, 1)} className={isSelected && person.selection?.level === 1 ? `selected`: ``}>Employee and Spouse</button>
    <Cost value={costs.employee + costs.spouse}/></p> : <></>}

    {person.dependents.filter(d=>d != person.spouse).length ? <p>
    <button onClick={()=>onSelect?.(plan, 2)} className={isSelected && person.selection?.level === 2 ? `selected`: ``}>Employee and Children</button>
    <Cost value={costs.employee + costs.dependents}/></p> : <></>}

    {person.dependents.length>1 && person.spouse ? <p>
        <button onClick={()=>onSelect?.(plan, 3)} className={isSelected && person.selection?.level === 3 ? `selected`: ``}>Employee and Family</button>
        <Cost value={costs.employee + costs.spouse + costs.dependents}/></p> : <></>}
   </section></section>
}