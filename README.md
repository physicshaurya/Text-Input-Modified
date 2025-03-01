# LWC Flow Screen Text Input Modified Component

## Overview
This **Lightning Web Component (LWC)** is a **custom text input field** designed for use within **Salesforce Flow Screens**. It provides additional flexibility by supporting properties like placeholder text, read-only mode, disabled state, required validation, and an optional mask for sensitive inputs (e.g., passwords).

## Features
- **Customizable Label & Placeholder**
- **Supports Read-Only & Disabled Modes**
- **Required Field Support**
- **Masking for Sensitive Data** (automatically sets input type to `password` when enabled)
- **Dynamically Updates Flow Variable** on user input

## Installation & Usage
### 1. Deploy the Component
To use this component in your Salesforce org, deploy the following files:
- `textInputModified.html`
- `textInputModified.js`
- `textInputModified.js-meta.xml`
- `textInputModified.css`

### 2. Add to Flow Screen
1. Open **Salesforce Flow Builder**.
2. Drag **Custom Component** onto a screen.
3. Select `TextInputModified` from the list.
4. Configure the properties as needed:
   - **Label:** Display name of the input field.
   - **Placeholder:** (Optional) Guide text inside the field.
   - **Read Only:** Disables input if `true`.
   - **Disabled:** Grays out the input if `true`.
   - **Required:** Forces the user to enter a value.
   - **Mask:** Hides input text (sets `type` to `password` when `true`).
   - **Value:** Stores the entered value dynamically.

### 3. Handle Input Value
The component **emits a change event** when the user types. You can **store the value in a Flow variable** for further processing.

## Technical Details
### Component Logic
- Uses **`lightning-input`** for native Salesforce styling.
- **`mask` Property:** Automatically toggles between `text` and `password` input types.
- Dispatches **Custom Event (`change`)** to send the latest input back to the Flow.

### Code Breakdown
#### **HTML (`textInputModified.html`)**
```html
<template>
    <lightning-input
        label={label}
        placeholder={placeholder}
        value={value}
        onchange={handleInputChange}
        readonly={readOnly}
        disabled={disabled}
        required={required}
        type={typeValue}>
    </lightning-input>
</template>
```

#### **JS (`textInputModified.js`)**
```js
import { LightningElement, api } from 'lwc';

export default class TextInputModified extends LightningElement {
    @api label;
    @api placeholder;
    @api readOnly = false;
    @api disabled = false;
    @api required = false;
    @api mask = false;
    @api value = '';

    handleInputChange(event) {
        this.value = event.target.value;
        this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
    }

    get typeValue() {
        return this.mask ? "password" : "text";
    }
}
```

## Roadmap & Enhancements
- **Validation Enhancements:** Support for regex-based input validation.
- **Icon Support:** Option to add an eye icon for password toggle.
- **Character Limits:** Ability to define min/max character constraints.

## Contributing
Feel free to submit **issues, bug reports, or feature requests** via GitHub.

## License
This component is open-source and available under the **MIT License**.

