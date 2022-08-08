import { Person } from "../models/Person"

export function createPerson(){
  const person = new Person({
    name: "Davi",
    age: 16
  })
  
  person.save()
}