import { React } from 'jimu-core';
import { type ModalHeaderProps as BSModalHeaderProps } from 'reactstrap';
/**
 * The ModalHeader component props.
 */
export interface ModalHeaderProps extends BSModalHeaderProps {
    closeIcon?: React.JSX.Element;
}
export declare class ModalHeader extends React.PureComponent<ModalHeaderProps> {
    render(): React.JSX.Element;
}
