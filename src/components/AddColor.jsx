import React from 'react';
import { useState, useCallback, StyleSheet } from 'react';
import { Card, Page, Layout, TextContainer, Image, Stack, Link, Heading, Form, FormLayout, TextField, Button, InlineError, Select } from "@shopify/polaris";

export function AddColor() {
    // Basic Page Information
    const pageID = "add-color";
    const pageTitle = "Add New Color";
    const pageDescription = "Add a new color to the color database by filling out the form with the new color.";
    
    // Page Component Information
    const secondaryActions = [
        { content: 'Something', onAction: () => { console.log("Something has been added") } },
        {content: 'Something Else', onAction: () => {console.log("Something Else has been added")}},
    ];

    /**
     * Fetch the form input data and process the information and send it to the server.
     * This function is called from the server
     * @author Tristan Elliott
     */
    
    // Color Name
    const [value, setValue] = useState('');
    const handleChange = useCallback((newValue) => setValue(newValue), []);
    // Color Code
    const [codeValue, setCodeValue] = useState('');
    const handleCodeChange = useCallback((newCodeValue) => setCodeValue(newCodeValue), []);
    // Color Hex
    const [codeHexValue, setCodeHexValue] = useState('');
    const handleCodeHexChange = useCallback((newCodeHexValue) => setCodeHexValue(newCodeHexValue), []);
    // Color Brand Options
    const [selected, setSelected] = useState('');
    const handleSelectChange = useCallback((value) => setSelected(value), []);
    const options = [
        { label: 'Duram', value: 'duram' },
        { label: 'Dulux', value: 'dulux' },
        {label: 'Excelsior', value: 'excelsior'},
    ];

    /**
     * This function is used to collect all the information processed by the client and submits it to the server.
     * @author Tristan Elliott
     */

    function formSubmitted() {
        const values = [value, codeValue, codeHexValue, selected];
        if (values.length > 0) {
            console.log(values);
        } else {
            console.error("No Value Found!");
        }
    }

    return (
        <Page
            id={pageID}
            title={pageTitle}
            subtitle={pageDescription}
            primaryAction={{ content: 'Save', onAction: () => { formSubmitted } }}
            secondaryActions={secondaryActions}
            fullWidth>
            <Card sectioned>
                <Form onSubmit={formSubmitted}>
                    <FormLayout id="add-colors-form">
                        {/* Select Brand */}
                        <Select
                            label="Select Brand"
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                        />
                        {/* Color Name Field */}
                        <TextField
                            id="color-name"
                            inputMode="text"
                            label="Color Name"
                            value={value}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {/* Color Code Field */}
                        <TextField
                            id="color-code"
                            inputMode="text"
                            label="Color Code"
                            value={codeValue}
                            onChange={handleCodeChange}
                            autoComplete="off"
                        />
                        {/* Color Code Hex Field */}
                        <TextField
                            id="color-code-hex"
                            inputMode="text"
                            label="Color Hex"
                            value={codeHexValue}
                            onChange={handleCodeHexChange}
                            autoComplete="off"
                        />
                        <Button primary submit>Add Color</Button>
                    </FormLayout>
                </Form>
            </Card>
        </Page>
    );
}
