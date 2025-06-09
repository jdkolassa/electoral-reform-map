import { React } from 'jimu-core';
import { type ButtonProps } from '../button';
export type DropdownButtonParts = 'root' | 'content' | 'caret';
/**
 * The DropdownButton component props.
 */
export interface DropdownButtonProps extends ButtonProps {
    /**
     * To provide a label for interactive components for accessibility purposes.
     * By default, the accessible name is computed from any text content inside the element.
     * With this prop, a sr-only DOM would be created with this label before value DOM.
     */
    'aria-label'?: string;
    /**
     * To provide a description for interactive components for accessibility purposes.
     * `aria-describedby` has a high priority than `a11y-description`.
     */
    'a11y-description'?: string;
    /**
     * Whether to show an arrow icon at the end of the button.
     * The icon can be customized by assigning the property with an element instead.
     * @default true
     */
    arrow?: boolean | React.ReactElement;
    /**
     * Whether the arrow points to the right.
     * @default false
     */
    arrowRight?: boolean;
    /**
     * Whether to show a dot icon at the right-bottom of the button.
     * Valid only when `arrow` is false and `icon` is true.
     * @default false
     */
    dot?: boolean | React.ReactElement;
    /**
     * Reference to the root html element.
     * @deprecated Use `ref` instead.
     */
    innerRef?: React.Ref<HTMLElement>;
}
/**
 * The `DropdownButton` component is a button element in a `Dropdown` component to toggle the dropdown menu.
 *
 * Please use this component together with `Dropdown`, `DropdownMenu` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownButton } from 'jimu-ui'
 * ```
 */
export declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
