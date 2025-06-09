import { type SerializedStyles } from '@emotion/react';
import { type IMDialogJson, type IMFixedPositionSizeJson } from '../../types/app-config';
export declare function getGlobalStylesForFixed(dialogJson: IMDialogJson, isFixedDlgOpen: boolean, browserHeight?: any, dialogSizeMode?: IMFixedPositionSizeJson): SerializedStyles;
export declare function getStylesForFixed(dialogSizeMode: IMFixedPositionSizeJson, browserHeight: any, interactionType: any): SerializedStyles;
export declare function getStylesForAnchored(dialogJson: IMDialogJson, dialogSizeMode: IMFixedPositionSizeJson): SerializedStyles;
export declare function getResizeStyle(): SerializedStyles;
