import { CreateToolActions } from '../../constraints';
export declare const overwriteAPIStyles: () => import("jimu-core").SerializedStyles;
export declare const getHideBorderClass: (isHideBorder: boolean) => string;
export declare const getHideBgColorClass: (isHideBgColor: boolean) => string;
export declare const getSelectionToolClass: (selectionTools: any, updateOnGraphicClick: boolean) => string;
export declare const insertCustomDom: (container: HTMLElement, additionalBtsContainerRef: HTMLElement, clearAllBtnContainerRef: HTMLElement, collapseBtnContainer: HTMLElement, disableSymbolSelectorFlag: boolean) => void;
export declare const getCurrentActiveBtn: (newActiveTool: CreateToolActions, toolbarContainer: HTMLElement) => Element;
export declare const _isPopperOpen: (disableSymbolSelectorFlag: boolean, isPanelOpened: boolean, currentActiveTool: any) => boolean;
