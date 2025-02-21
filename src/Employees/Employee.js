export class Person {
    constructor(name) {
        this.name = name; 
    }
}

export class Employee extends Person {
    static config = {}
    constructor(id, name, dependents) {
        super(name);
        this.id = id;
        this.selection = {
            plan: null,
            level: null,
        };
        this.dependents = dependents || [];
        this.spouse = null;
    }


    addDependent(name) {
        this.dependents.push(new Person(name));
    }

    removeDependent(name) {
        this.dependents = this.dependents.filter(d=>d.name != name);
    }

}