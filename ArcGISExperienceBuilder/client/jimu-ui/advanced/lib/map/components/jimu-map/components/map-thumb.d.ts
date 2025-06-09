import { React } from 'jimu-core';
interface Props {
    mapItemId: string;
    portUrl: string;
}
interface States {
    mapThumbCache: {
        [key: string]: string;
    };
}
export default class MapThumb extends React.PureComponent<Props, States> {
    unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: any): void;
    getMapThumbKey(_portalUrl: string, _mapItemId: string): string;
    addMapThumbUrlToCache(mapThumbKey: string, mapThumbUrl: string): void;
    requestThumbUrlByProps(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export {};
