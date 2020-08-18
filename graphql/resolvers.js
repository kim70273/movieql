import {people, getById, addPerson, deletePerson } from "./db"

const resolvers = {
    Query :{
        people: () => people,
        person: (_,{id}) =>getById(id)
    },
    Mutation :{
        addPerson: (_,{id,password})=>addPerson(id,password),
        deletePerson: (_,{id})=> deletePerson(id)
    }
}

export default resolvers;