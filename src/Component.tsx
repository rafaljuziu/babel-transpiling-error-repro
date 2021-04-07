import React from 'react';
import Form from 'react-bootstrap/es/Form';

export default function Component() {
    return (
        <div>
            <span>Example Form</span>
            <Form>
                <input type="text"
                       name="example"/>
            </Form>
        </div>
    )
}
