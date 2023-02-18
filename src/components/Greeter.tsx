import React from "react";

interface GreeterProps {
    id?: number,
    person: string,
    age?: number,
}

const Greeter = ({ person }: GreeterProps): JSX.Element => {
    return (
        <h1>Hello {person}!</h1>
    );
};

export default Greeter;