import { React } from 'jimu-core';
import { BaseTool, type BaseToolProps, type IconType } from '../layout/base/base-tool';
export default class Fullscreen extends BaseTool<BaseToolProps, unknown> {
    toolName: string;
    getTitle(): string;
    getIcon(): IconType;
    fullScreenMap: () => any;
    getExpandPanel(): React.JSX.Element;
    getContent: (fullScreenMap: any) => import("jimu-core").jsx.JSX.Element;
    render(): React.JSX.Element;
}
