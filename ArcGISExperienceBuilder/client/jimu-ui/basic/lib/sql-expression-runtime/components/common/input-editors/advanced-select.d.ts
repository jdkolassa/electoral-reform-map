import { React, ReactRedux, BrowserSizeMode } from 'jimu-core';
import type { DataSource, IMFieldSchema, CodedValue, ClauseValueOptions, ClauseValuePair, SqlExpression } from 'jimu-core';
interface Props {
    'aria-label?': string;
    'aria-describedby'?: string;
    value: ClauseValueOptions;
    dataSource: DataSource;
    runtime: boolean;
    onChange: (valueObj: ClauseValueOptions) => void;
    isSmallSize?: boolean;
    isMultiple?: boolean;
    codedValues?: CodedValue[];
    fieldObj?: IMFieldSchema;
    sqlExpression?: SqlExpression;
    style?: React.CSSProperties;
    className?: string;
}
interface AppStateProps {
    browserSizeMode: BrowserSizeMode;
}
export declare class _VIAdvancedSelect extends React.PureComponent<Props & AppStateProps> {
    onValueChange: (valuePairs: ClauseValuePair[]) => void;
    useDynamicValues: () => boolean;
    render(): React.JSX.Element;
}
declare const VIAdvancedSelect: ReactRedux.ConnectedComponent<typeof _VIAdvancedSelect, {
    style?: React.CSSProperties;
    value: ClauseValueOptions;
    dataSource: DataSource;
    onChange: (valueObj: ClauseValueOptions) => void;
    className?: string;
    'aria-describedby'?: string;
    ref?: React.LegacyRef<_VIAdvancedSelect>;
    key?: React.Key | null | undefined;
    sqlExpression?: SqlExpression;
    isMultiple?: boolean;
    fieldObj?: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").FieldSchema> & {
        readonly jimuName: string;
        readonly type: import("jimu-core").JimuFieldType;
        readonly esriType?: import("jimu-core").EsriFieldType;
        readonly name: string;
        readonly alias?: string;
        readonly description?: string;
        readonly format?: import("seamless-immutable").ImmutableObject<import("jimu-core").FieldFormatSchema>;
        readonly originFields?: import("seamless-immutable").ImmutableArray<string>;
    };
    runtime: boolean;
    'aria-label?': string;
    isSmallSize?: boolean;
    codedValues?: CodedValue[];
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export default VIAdvancedSelect;
