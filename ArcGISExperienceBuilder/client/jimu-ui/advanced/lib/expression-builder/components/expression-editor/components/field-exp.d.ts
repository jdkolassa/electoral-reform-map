import { React } from 'jimu-core';
interface Props {
    exp: string;
    id: string;
    isEditable: boolean;
    isError: boolean;
    isDsDisabled: boolean;
    dataSourceId: string;
    className?: string;
    style?: React.CSSProperties;
}
export default class FieldExp extends React.PureComponent<Props, unknown> {
    getDsLabel: () => string;
    render(): React.JSX.Element;
}
export {};
