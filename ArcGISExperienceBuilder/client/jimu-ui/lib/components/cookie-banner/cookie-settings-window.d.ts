/** @jsx jsx */
import { jsx } from 'jimu-core';
export interface CookieSettingsWindowProps {
    builderEntry: any;
    bannerUid: string;
    isEditable: boolean;
    onSave: (...args: any[]) => any;
    toggle: (...args: any[]) => any;
}
declare const CookieSettingsWindow: (props: CookieSettingsWindowProps) => jsx.JSX.Element;
export default CookieSettingsWindow;
