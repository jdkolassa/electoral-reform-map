import { React } from 'jimu-core';
interface Props {
    exp: string;
    id: string;
    isEditable: boolean;
}
export default class StringExp extends React.PureComponent<Props, unknown> {
    render(): React.JSX.Element;
}
export {};
