/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { type PageContextProps, type LayoutItemProps, type WidgetProps } from 'jimu-layouts/layout-runtime';
type Props = LayoutItemProps & WidgetProps;
export declare class WidgetRendererInBuilder extends React.PureComponent<Props> {
    pageContext: PageContextProps;
    mask(): jsx.JSX.Element;
    getStyle(): import("jimu-core").SerializedStyles;
    getPlaceholderStyle(): import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
export {};
