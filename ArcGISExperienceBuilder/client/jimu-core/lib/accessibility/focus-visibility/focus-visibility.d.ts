import * as React from 'react';
/**
 * For body element.
 * Add it when keyboard nav mode.
 * Remove it when mouse nav mode.
 */
export declare const KEYBOARD_NAV_CLASS = "jimu-keyboard-nav";
export declare const INTERACTIVE_CLASS = "jimu-interactive-node";
export declare function isKeyboardMode(): boolean;
/**
 * Focus on the element in keyboard mode
 * @param element the interactive element, or an object with a focus method.
 * @param forceFocus Focus the element ignoring the keyboardMode. Default: false.
 */
export declare function focusElementInKeyboardMode<T extends HTMLElement | {
    focus: () => void;
}>(element: T, forceFocus?: boolean): void;
export declare function FocusVisibility(props: any): React.JSX.Element;
