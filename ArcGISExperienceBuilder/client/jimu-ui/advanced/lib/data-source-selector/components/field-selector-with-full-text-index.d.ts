/** @jsx jsx */
import { jsx } from 'jimu-core';
import { type FieldSelectorProps } from './field-selector';
export declare enum AddDefinitionStatus {
    Success = "SUCCESS",
    Error = "ERROR"
}
interface Props extends FieldSelectorProps {
    widgetId: string;
    addDefinitionStatusChange?: (status: AddDefinitionStatus) => void;
}
export declare const FieldSelectorWithFullTextIndex: (props: Props) => jsx.JSX.Element;
export {};
