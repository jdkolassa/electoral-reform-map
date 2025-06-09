/** @jsx jsx */
import { React, type LayoutInfo, jsx } from 'jimu-core';
interface ExtraProps {
    formatMessage: (id: string) => string;
}
export default class CommonLayoutItemSetting extends React.PureComponent<{
    layoutId: string;
    layoutItemId: string;
    onSettingChange?: (layoutInfo: LayoutInfo, setting: any) => void;
    setting: any;
} & ExtraProps> {
    updateRotation: (value: any) => void;
    formatMessage: (id: string) => string;
    render(): jsx.JSX.Element;
}
export {};
