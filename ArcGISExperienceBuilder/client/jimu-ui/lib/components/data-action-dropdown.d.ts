/** @jsx jsx */
import { React, jsx, type IMThemeVariables, type ThemeButtonType, type DataRecordSet } from 'jimu-core';
import type { ButtonSize } from './button';
interface Props {
    widgetId: string;
    dataSets: DataRecordSet[];
    type?: ThemeButtonType;
    size?: ButtonSize;
}
interface ThemeProps {
    theme: IMThemeVariables;
}
export declare class _DataActionDropDown extends React.PureComponent<Props & ThemeProps> {
    render(): jsx.JSX.Element;
}
/**
 * @deprecated
 * This component is deprecated, please use `DataActionList` and pass `DataActionListStyle.Dropdown` as
 * the `listStyle`'s value to get the same experience. The `type` and `size` fields are renamed to `buttonType`
 * and `buttonSize`.
 * Please do notice that UI style might change
 * a little for hover & click, overwritten the style as you need.
 */
export declare const DataActionDropDown: React.ForwardRefExoticComponent<Pick<Props, keyof Props> & {
    theme?: IMThemeVariables;
}>;
export {};
