import { React } from 'jimu-core';
import type { StandardComponentProps } from '../types';
export type SelectParts = 'root' | 'placeholder' | 'button' | 'list';
/**
 * The Select component props.
 */
export interface SelectProps extends StandardComponentProps {
    /**
     * The unique ID added to the element.
     */
    id?: string;
    /**
     * Defines the title added to the element.
     */
    title?: string;
    /**
     * See {@link DropdownButtonProps} for details.
     */
    'aria-label'?: string;
    /**
     * See {@link DropdownButtonProps} for details.
      */
    'a11y-description'?: string;
    /**
     * `aria-describedby` is used to indicate the IDs of the elements that describe the component.
     * It is for accessibility purposes.
     */
    'aria-describedby'?: string;
    /**
     * Defines the size of the select component.
     * @default default
     */
    size?: 'default' | 'sm' | 'lg';
    /**
     * Default input element value. It is used when the component is not controlled.
     */
    defaultValue?: string | number;
    /**
     * Input element value. It is used to display value when the component is controlled.
     */
    value?: string | number;
    /**
     * HTML attribute passed to the `button` node.
     */
    name?: string;
    /**
     * If `true`, the select will be disabled.
     */
    disabled?: boolean;
    /**
     * Indicates the placeholder text.
     */
    placeholder?: string;
    /**
     * Whether to use the first option as the default value.
     * @default false
     */
    useFirstOption?: boolean;
    /**
     * Whether to put select list to body overlay container by ReactDOM.createPortal
     * @default true
     */
    appendToBody?: boolean;
    /**
     * The z-index used for the select list.
     */
    zIndex?: number;
    /**
     * Callback fired when the value is changed.
     */
    onChange?: (evt: any, value?: string | number) => void;
    /**
     * Fire callback when the component is clicked.
     */
    onClick?: React.MouseEventHandler;
    /**
     * The content of the select component.
     */
    children?: React.ReactNode;
}
/**
 * The `Select` component is used to provide the user the ability to choose an option from a list.
 *
 * ```ts
 * import { Select } from 'jimu-ui'
 * ```
 */
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export * from './option';
