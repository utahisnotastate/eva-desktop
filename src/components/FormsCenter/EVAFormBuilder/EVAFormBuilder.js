import React from 'react';
import { FormBuilder } from 'cb-react-forms';

export default function EVAFormBuilder() {
    return (
        <FormBuilder 
            onSubmit={(data) => {
                console.log(data)
            } }
        />
    )
}
