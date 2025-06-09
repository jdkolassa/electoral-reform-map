/** @jsx jsx */
import { React, jsx, type IntlShape } from 'jimu-core';
import { type ShiftOptions, type FlipOptions } from 'jimu-ui';
import { UIComponent, type UIComponentProps } from './ui-component';
import type { ToolJson } from '../config';
export interface BaseToolProps extends UIComponentProps {
    toolJson: ToolJson;
    toolName: string;
    isMobile?: boolean;
    intl?: IntlShape;
    activeToolName: string;
    onActiveToolNameChange: (activeToolName: string) => void;
}
export interface IconType {
    icon: React.ComponentClass<React.SVGAttributes<SVGElement>>;
    onIconClick?: (evt?: React.MouseEvent<any>) => void;
}
export declare abstract class BaseTool<P extends BaseToolProps, S> extends UIComponent<P, S> {
    iconContainer: HTMLElement;
    toolName: string;
    isContainedToMobilePanel: boolean;
    generation?: number;
    shiftOptions: ShiftOptions;
    flipOptions: FlipOptions;
    exbMapUiRef: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    private _cssStyle;
    abstract getTitle(): string;
    abstract getIcon(): IconType;
    abstract getExpandPanel(): React.JSX.Element;
    focusDefaultElement(): void;
    onShowPanel(): void;
    onClosePanel(): void;
    destroy(): void;
    static getIsNeedSetting(): boolean;
    private onPopperToggle;
    private _onKeyDown;
    private _onIconClick;
    private readonly _getContent;
    private _initIconContainer;
    private readonly onResize;
    private _renderPCTool;
    private _renderMobileTool;
    private getExpandPanelPlacementClassName;
    render(): jsx.JSX.Element;
}
