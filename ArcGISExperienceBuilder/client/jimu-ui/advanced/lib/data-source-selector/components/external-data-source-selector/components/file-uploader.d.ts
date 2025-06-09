import { React, type IMDataSourceJson } from 'jimu-core';
import { type CsvFileInfo } from 'jimu-ui/basic/file-uploader';
interface Props {
    onDataSourceUploaded: (dsJson: IMDataSourceJson) => void;
}
interface State {
    fileName: string;
}
export default class extends React.PureComponent<Props, State> {
    constructor(props: any);
    onUploadSuccess: (csvFile: CsvFileInfo) => void;
    render(): React.JSX.Element;
}
export {};
