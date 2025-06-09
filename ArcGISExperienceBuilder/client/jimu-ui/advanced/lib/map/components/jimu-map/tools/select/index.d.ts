import { BaseTool, type BaseToolProps, type IconType } from '../../layout/base/base-tool';
export default class Select extends BaseTool<BaseToolProps, unknown> {
    toolName: string;
    constructor(props: any);
    getTitle(): string;
    getIcon(): IconType;
    getExpandPanel(): React.JSX.Element;
}
