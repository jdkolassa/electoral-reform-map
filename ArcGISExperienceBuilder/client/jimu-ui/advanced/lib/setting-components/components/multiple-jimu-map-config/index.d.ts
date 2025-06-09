import { React, jsx } from 'jimu-core';
export interface MultipleJimuMapValidateResult {
    /**
     * The validation result of the data source.
     */
    isValid: boolean;
    /**
     * The tooltip that shows up when hovering on an invalid data source's warning icon.
     */
    invalidMessage?: string;
}
export interface MultipleJimuMapConfigProps {
    /** The map widget ID that is using this component. */
    mapWidgetId: string;
    /** The JSX content that you want to put in the `SidePopper` panel. DO NOT wrap it with the `SidePopper` component. */
    sidePopperContent?: React.JSX.Element;
    /**
     * Whether to disable the map-switch behavior when clicking on different `JimuMap` items. The default value is `false`.
     * @default false
     */
    disableSwitchMap?: boolean;
    /**
     * Whether to disable the whole list.
     * @default false
     */
    disabled?: boolean;
    /** The callback function of clicking an item in the list. */
    onClick?: (dataSourceId: string) => void;
    /**
     * Used for checking whether a specific `dataSourceId` is valid for configuration.
     * It will show a warning icon if the return value is `false`.
     */
    isDataSourceValid?: (dataSourceId: string) => MultipleJimuMapValidateResult;
    /**
     * Display a default `JimuMap` item when no web map is added to the map widget.
     * @default false
     */
    showDefaultMapWhenEmpty?: boolean;
    /**
     * ForwardRef to component outer div.
     * @ignore
     */
    forwardRef?: (ref: any) => void;
    /**
     * Keep the last time clicked `JimuMap` when closing the side popper
     * @default false
     */
    keepLastTimeMap?: boolean;
    /**
     * The id of the description element
     * @ignore
     */
    'aria-describedby'?: string;
}
declare function MultipleJimuMapConfigComponent(props: MultipleJimuMapConfigProps): jsx.JSX.Element;
/**
 * This component is used for configuring one or multiple `JimuMap`. If two data sources are selected in the connected map widget,
 * clicking on the list item of this component switches the map widget's active view to the corresponding one. The switch behavior
 * is on the fly (discarded when refreshing the page).
 * Use this component by `import { MultipleJimuMapConfig } from 'jimu-ui/advanced/setting-components'`.
 */
export declare const MultipleJimuMapConfig: typeof MultipleJimuMapConfigComponent;
export {};
