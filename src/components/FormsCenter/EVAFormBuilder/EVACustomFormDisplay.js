import React from "react";
import { FormGenerator } from 'cb-react-forms';
import fakeform from "./fakeform.data";



export default function EVACustomFormDisplay() {
    return (
        <FormGenerator
        formData={fakeform}
        onSubmit={(data) => {
            console.log(data)
        }}
        />
    )
}
