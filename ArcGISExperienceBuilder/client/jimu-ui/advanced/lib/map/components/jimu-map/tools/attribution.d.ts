import { React } from 'jimu-core';
import { BaseTool, type BaseToolProps, type IconType } from '../layout/base/base-tool';
export default class Attribution extends BaseTool<BaseToolProps, unknown> {
    toolName: string;
    static getIsNeedSetting(): boolean;
    getTitle(): string;
    getIcon(): IconType;
    getExpandPanel(): React.JSX.Element;
}
