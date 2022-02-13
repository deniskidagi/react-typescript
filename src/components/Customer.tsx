import React from 'react'

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    address?: string,
    islegal: boolean
}


const Customer = (props: Person) => {
    const {firstName, lastName, age, islegal} = props
  return (
    <div>
        <h1>Hello React</h1>
    </div>
  )
}

export default Customer