import { jsx } from '@emotion/react';
import type { UIComponents } from './index';
export declare enum LoadStatus {
    Pending = "Pending",
    Fulfilled = "Fulfilled",
    Rejected = "Rejected"
}
interface Props {
    graphic: __esri.Graphic;
    popupTemplate: __esri.PopupTemplate;
    uiComponents: UIComponents;
}
export default function FeatureInfo(props: Props): jsx.JSX.Element;
export {};
