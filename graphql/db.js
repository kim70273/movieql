export let people =[
    {
        id:"aaa",
        password:"123456",
        num:0
    },
    {
        id:"bbb",
        password:"1232321",
        num:1
    },
    {
        id:"ccc",
        password:"33333",
        num:2
    }
];

export const getById = id =>{
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};

export const addPerson =(id, password) =>{
    const filteredPeople = people.filter(person => person.id === id);

    if(filteredPeople[0]==null) {
        const newPerson ={
            id,
            password,
            num: `${people.length+1}`
        };
        people.push(newPerson);
        return true;
    }
    else return false;
}

export const deletePerson =(id)=>{
    const filteredPeople = people.filter(person => person.id !== id);
    if(filteredPeople.length === people.length) return false;
    else{
        people = filteredPeople;
        return true;
    }
}