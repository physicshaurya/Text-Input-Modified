import { LightningElement, api } from 'lwc';

export default class TextInput extends LightningElement {
    @api label;          // Field label
    @api placeholder;    // Placeholder text
    @api readOnly = false; // Whether the field is read-only
    @api disabled = false; // Whether the field is disabled
    @api required = false; // Whether the field is required
    @api mask = false;
    @api value = '';      // Value property that serves as both input and output

    handleInputChange(event) {
        this.value = event.target.value;

        // Dispatch the input value to Flow
        const valueChangeEvent = new CustomEvent('change', {
            detail: this.value
        });
        this.dispatchEvent(valueChangeEvent);
    }

    get typeValue() {
        return this.mask ? "password" : "text";
    }
}