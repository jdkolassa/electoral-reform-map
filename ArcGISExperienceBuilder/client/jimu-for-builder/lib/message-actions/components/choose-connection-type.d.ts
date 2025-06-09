/** @jsx jsx */
import { jsx, type DataSource, MessageActionConnectionType } from 'jimu-core';
interface Props {
    messageDataSource: DataSource;
    actionDataSource: DataSource;
    connectionType: MessageActionConnectionType;
    onUseLayersRelationship: () => void;
    onSetCustomFields: () => void;
}
declare const ChooseConnectionType: (props: Props) => jsx.JSX.Element;
export default ChooseConnectionType;
