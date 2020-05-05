import React from 'react'
const fontSty={
    color:'teal', fontStyle:'italic'
}

function List() {
    const persons = [{id:1, name: 'Ragasudha', skill: 'awesome'},
                     {id:2, name: 'Rajasree', skill: 'overscene' }]
const personlist = persons.map(person => <h3>{person.name} is {person.skill}</h3>)
    return (
        <div style={fontSty}>
            {personlist}

        </div>
    )
}

export default List
