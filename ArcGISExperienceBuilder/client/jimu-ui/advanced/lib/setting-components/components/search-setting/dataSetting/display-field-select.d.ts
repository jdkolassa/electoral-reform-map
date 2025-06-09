/** @jsx jsx */
import { jsx, type FieldSchema, type IMFieldSchema, type UseDataSource } from 'jimu-core';
interface DisplayFieldProps {
    disPlayField: FieldSchema[];
    useDataSource: UseDataSource;
    onFieldChange: (allSelectedFields: IMFieldSchema[], preFields: any, isDisplayField?: boolean) => void;
}
declare const DisplayFieldSelect: (props: DisplayFieldProps) => jsx.JSX.Element;
export default DisplayFieldSelect;
