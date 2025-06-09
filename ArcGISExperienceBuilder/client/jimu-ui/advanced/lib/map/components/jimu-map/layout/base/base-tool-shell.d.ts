/** @jsx jsx */
import { jsx, type IntlShape } from 'jimu-core';
import { UIComponent, type UIComponentProps } from './ui-component';
import type { ToolConfig } from '../../config';
import type { LayoutJson } from '../config';
interface ToolShellProps extends UIComponentProps {
    layoutConfig: LayoutJson;
    toolConfig: ToolConfig;
    toolName: string;
    isMobile?: boolean;
    isHidden?: boolean;
    intl?: IntlShape;
    isLastElement?: boolean;
    className?: string;
    activeToolName: string;
    onActiveToolNameChange: (activeToolName: string) => void;
}
export default class BaseToolShell extends UIComponent<ToolShellProps, unknown> {
    render(): jsx.JSX.Element;
}
export {};
