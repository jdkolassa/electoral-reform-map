import { React } from 'jimu-core';
interface Props {
    onDestroyed?: () => void;
    children?: React.ReactNode;
}
export default class PanelShell extends React.PureComponent<Props, unknown> {
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export {};
