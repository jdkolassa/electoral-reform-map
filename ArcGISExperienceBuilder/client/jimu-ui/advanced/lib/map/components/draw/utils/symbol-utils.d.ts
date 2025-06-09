import { JimuSymbolType, type JimuSymbol } from '../../symbol-selector';
import { type CurrentSymbols, ActiveToolTypes } from '../index';
export declare const setCurrentSymbolToSketch: (currentActiveTool: ActiveToolTypes, newActiveTool: ActiveToolTypes, sketch: any, currentSymbols: CurrentSymbols) => void;
export declare const getCurrentSymbol: (newActiveTool: ActiveToolTypes, currentSymbols: CurrentSymbols, jsonUtils: any) => JimuSymbol;
export declare const getSymbolTypeByActiveTool: (newActiveTool: any) => JimuSymbolType.Point | JimuSymbolType.Polyline | JimuSymbolType.Polygon;
