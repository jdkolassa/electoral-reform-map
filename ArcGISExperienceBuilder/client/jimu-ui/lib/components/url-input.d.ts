/** @jsx jsx */
import { React, type URIScheme } from 'jimu-core';
import { type TextAreaProps } from './text-area';
/**
 * The url input component props.
 */
export interface UrlInputProps extends Pick<TextAreaProps, 'value' | 'height' | 'defaultValue' | 'placeholder' | 'className' | 'style' | 'innerRef' | 'checkValidityOnChange' | 'checkValidityOnAccept'> {
    /**
     * Url schemes, for example, 'https' and 'mailto'.
     */
    schemes: URIScheme[];
    /**
     * Callback whenever input url changes.
     */
    onChange?: (result: UrlInputResult) => void;
    /**
     * Callback fires when the text box is blurred or the `enter` key is pressed,
     * which is considered to be the complete of the editing process.
     */
    onAcceptValue?: (result: UrlInputResult) => void;
}
export interface UrlInputResult {
    value: string;
    valid: boolean;
}
/**
 * The `UrlInput` component is similar to the `TextArea` component, but is with the default check for the input url.
 *
 * ```ts
 * import { UrlInput } from 'jimu-ui'
 * ```
 */
export declare const _UrlInput: React.ForwardRefExoticComponent<UrlInputProps & React.RefAttributes<HTMLInputElement>>;
/**
 * The `UrlInput` component is similar to the `TextArea` component, but is with the default check for the input url.
 *
 * ```ts
 * import { UrlInput } from 'jimu-ui'
 * ```
 */
export declare const UrlInput: React.ForwardRefExoticComponent<Pick<UrlInputProps & React.RefAttributes<HTMLInputElement>, keyof React.RefAttributes<HTMLInputElement> | keyof UrlInputProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
