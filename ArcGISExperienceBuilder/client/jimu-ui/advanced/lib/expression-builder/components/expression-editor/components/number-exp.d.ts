import { React } from 'jimu-core';
interface Props {
    exp: string;
    id: string;
    isEditable: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export default class NumberExp extends React.PureComponent<Props, unknown> {
    render(): React.JSX.Element;
}
export {};
