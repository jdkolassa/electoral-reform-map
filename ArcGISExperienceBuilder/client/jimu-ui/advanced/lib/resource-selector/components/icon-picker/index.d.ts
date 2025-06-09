import { React, type IconResult, type IMIconResult } from 'jimu-core';
import { type ButtonProps } from 'jimu-ui';
import type { PublicIconGroupType, ConfigurableOption, PreviewOptions } from './types';
/**
 * Properties for the IconPicker component.
 */
export interface IconPickerProps {
    /**
     * Defines the class names added to the element.
     */
    className?: string;
    /**
     * The default icon.
     */
    icon?: IconResult;
    /**
     * Whether to apply a default color `--ref-palette-neutral-1100` when the icon color is empty.
     * @default true
     */
    applyDefaultColor?: boolean;
    /**
     * If `true`, the selected icon will display in the button node.
     * @default true
     */
    showIcon?: boolean;
    /**
     * If `true`, the button title of the selected icon will display
     * in the button node.
     * @default false
     */
    showLabel?: boolean;
    /**
     * If showLabel is `true` and the value is passed, it will be displayed as button title of the selected icon.
     * If showLabel is `true` and the value is not set, for the default icons or custom icons, the file name will be displayed as selected button title; for the uploaded icons, the original name will be displayed as selected button title.
     */
    customLabel?: string;
    /**
     * If `true`, the remove option will be hidden.
     * @default false
     */
    hideRemove?: boolean;
    /**
     * Defines which icon properties(s) can be configured in the icon picker.
     */
    configurableOption?: ConfigurableOption;
    /**
     * Turn on/off preview options in the icon picker's dialog.
     * @default { size: true, color: true }
     */
    previewOptions?: PreviewOptions;
    /**
     * The options apply to the dropdown button element.
     * @default { type: 'secondary', size: 'sm' }
     */
    buttonOptions?: ButtonProps;
    /**
     * The options apply to the remove button element.
     * @default { type: 'default', size: 'sm' }
     */
    removeButtonOptions?: ButtonProps;
    /**
     * Defines which groups of icons to show as the default icon options
     * from Jimu UI's predefined library.
     */
    groups?: PublicIconGroupType | PublicIconGroupType[] | 'none';
    /**
     * Configures additional icons as options.
     */
    customIcons?: IconResult[];
    /**
     * Callback fired when the dropdown button is clicked.
     * @event
     * @property e - the click event raised by the dropdown button.
     */
    onButtonClick?: (e: any) => void;
    /**
     * Callback fired when the dropdown button is triggered by Keyboard.
     * @event
     * @property e - the click event raised by the dropdown button.
     * @ignore
     */
    onKeyDown?: (e: any) => void;
    /**
     * Callback fired when the icon selection has been changed.
     * @event
     * @property result - the selected icon object.
     */
    onChange?: (result: IMIconResult) => void;
    /**
     *Is direction vertical
    */
    vertical?: boolean;
    /**
     * @default false
     * @ignore
     */
    useKeyUpEvent?: boolean;
    /**
     * Defines whether 'setButton' use icon color.
     * @default true
     */
    setButtonUseColor?: boolean;
    children?: React.ReactNode;
}
/**
 * The Icon Picker is used to select an icon from a predefined icon library. This is usually used in a setting panel.
 *
 * #### Example:
 * ```typescript
 * import { IconPicker } from 'jimu-ui/advanced/resource-selector'
 * import sampleIcon from 'jimu-icons/svg/outlined/xxx/widget.svg'
 * <IconPicker icon={{svg: sampleIcon, properties: {filename: 'widget.svg'}}} />
 * ```
 * #### Props:
 * See {@link IconPickerProps} for more details.
 */
export declare const IconPicker: import("@emotion/styled").StyledComponent<Omit<IconPickerProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
}, {}, {}>;
