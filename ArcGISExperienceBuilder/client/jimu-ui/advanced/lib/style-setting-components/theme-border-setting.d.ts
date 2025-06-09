/** @jsx jsx */
import { React, jsx, type IntlShape, type IMThemeVariables } from 'jimu-core';
import { type BorderStyle } from 'jimu-ui';
/**
 * The `ThemeBorderSetting` component props.
 */
export interface ThemeBorderSettingProps {
    isCustom: boolean;
    /**
     * The value of this component, including the border color, line style and width
     */
    value?: BorderStyle;
    /**
     * Invoked when the border value changes.
     */
    onChange?: (useCustom: boolean, value: BorderStyle) => void;
    /**
     * Defines the class names added to the element.
     */
    className?: string;
}
interface ExtraProps {
    intl?: IntlShape;
    theme2?: IMThemeVariables;
}
interface State {
    isDropdownOpen: boolean;
}
export declare const THEME_BORDER_COLOR_LIST: string[];
/**
 * The `ThemeBorderSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { ThemeBorderSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
export declare class _ThemeBorderSetting extends React.PureComponent<ThemeBorderSettingProps & ExtraProps, State> {
    static defaultProps: Partial<ThemeBorderSettingProps & ExtraProps>;
    constructor(props: any);
    toggleDropdown: () => void;
    getStyle: (color: any) => import("jimu-core").SerializedStyles;
    createItem: (color: any, index: any) => jsx.JSX.Element;
    translate: (id: string) => string;
    render(): jsx.JSX.Element;
}
/**
 * The `ThemeBorderSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { ThemeBorderSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
export declare const ThemeBorderSetting: React.ForwardRefExoticComponent<Pick<Omit<any, "intl"> & {
    forwardedRef?: React.Ref<any>;
}, string | number | symbol> & {
    theme?: IMThemeVariables;
}>;
export {};
