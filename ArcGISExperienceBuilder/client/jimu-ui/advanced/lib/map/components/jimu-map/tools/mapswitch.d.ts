/** @jsx jsx */
import { jsx } from 'jimu-core';
import { BaseTool, type BaseToolProps, type IconType } from '../layout/base/base-tool';
export default class MapSwitch extends BaseTool<BaseToolProps, unknown> {
    toolName: string;
    static getIsNeedSetting(): boolean;
    getStyle(): import("jimu-core").SerializedStyles;
    getTitle(): string;
    getIcon(): IconType;
    switchMap: () => any;
    getExpandPanel(): React.JSX.Element;
    handleKeyDown: (e: React.KeyboardEvent<any>, onClick: any) => void;
    getContent: (isShowMapSwitchBtn: boolean, dataSourceIds: string[], activeDataSourceId: string, switchMap: any, mapComponentId: any) => jsx.JSX.Element;
    getIconContent: (isShowMapSwitchBtn: boolean, dataSourceIds: string[], activeDataSourceId: string, switchMap: any) => jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
