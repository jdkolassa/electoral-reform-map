import { React } from 'jimu-core';
import type { DataSource, CodedValue, ClauseValueOptions, IMFieldSchema, SqlExpression } from 'jimu-core';
export interface InputEditorProps {
    'aria-label'?: string;
    'aria-describedby'?: string;
    runtime: boolean;
    valueOptions: ClauseValueOptions;
    fieldObj: IMFieldSchema;
    dataSource: DataSource;
    isSmallSize?: boolean;
    codedValues?: CodedValue[];
    sqlExpression?: SqlExpression;
    isFromBuilder?: boolean;
    onChange: (valueOptions: ClauseValueOptions) => void;
}
interface State {
    inputEditor: any;
}
export declare class _InputEditorRender extends React.PureComponent<InputEditorProps, State> {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: InputEditorProps, prevState: State): void;
    _setStateForInputEditor: () => void;
    render(): React.JSX.Element;
}
export declare const InputEditorRender: typeof _InputEditorRender;
export {};
