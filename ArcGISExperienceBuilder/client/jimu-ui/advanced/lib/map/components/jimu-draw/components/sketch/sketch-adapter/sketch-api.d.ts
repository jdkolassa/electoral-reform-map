/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import type { JimuPointSymbol, JimuPolylineSymbol, JimuPolygonSymbol, JimuTextSymbol, JimuSymbol, JimuSymbolType, DrawingElevationMode3D } from 'jimu-ui/advanced/map';
import { type JimuMapView } from 'jimu-arcgis';
import { CreateToolActions, type JimuDrawCreatedDescriptor, type DrawingUpdatedDescriptor, type LayerListMode, type JimuDrawVisibleElements } from '../constraints';
import type { JimuDrawCreationMode, JimuSymbolsGroup } from '../';
import { type JimuDrawUIOptions } from '../../layouts';
import type { MeasurementsRuntimeInfo } from '../../measurements/constraints';
export interface SketchAPIProps {
    jimuMapView: JimuMapView;
    operatorWidgetId: string;
    creationMode?: JimuDrawCreationMode;
    visibleElements?: JimuDrawVisibleElements;
    updateOnGraphicClick?: boolean;
    defaultCreateOptions?: __esri.SketchViewModelDefaultCreateOptions;
    defaultUpdateOptions?: __esri.SketchViewModelDefaultUpdateOptions;
    snappingOptions?: __esri.SnappingOptions;
    tooltipOptions?: __esri.SketchTooltipOptions;
    elevationInfo?: DrawingElevationMode3D;
    layerListMode?: LayerListMode;
    disableSymbolSelector?: boolean;
    defaultSymbols?: JimuSymbolsGroup;
    pointSymbol?: JimuPointSymbol;
    polylineSymbol?: JimuPolylineSymbol;
    polygonSymbol?: JimuPolygonSymbol;
    textSymbol?: JimuTextSymbol;
    onJimuDrawCreated?: (jimuDrawCreatedDescriptor: JimuDrawCreatedDescriptor) => void;
    onToolsActivated?: (drawingMode: string) => void;
    onDrawingCleared?: () => void;
    onDrawingStarted?: () => void;
    onDrawingCanceled?: () => void;
    onDrawingFinished?: (graphic: __esri.Graphic) => void;
    onDrawingUpdated?: (result: DrawingUpdatedDescriptor) => void;
    currentSymbolChanged: (symbol: JimuSymbol) => void;
    currentSymbolTypeChanged: (jimuSymbolType: JimuSymbolType) => void;
    currentActiveToolChanged: (type: CreateToolActions) => void;
    uiOptions: JimuDrawUIOptions;
    currentActiveBtnChanged: (ref: Element) => void;
    isExpandSymbolList: boolean;
    setIsExpandSymbolList: (isExpand: boolean) => void;
    enableSymbolSelector: (enableFlag: boolean) => void;
    measurementsRuntimeInfo: MeasurementsRuntimeInfo;
}
export interface ApiModulesTypes {
    Sketch: typeof __esri.Sketch;
    SketchViewModel: typeof __esri.SketchViewModel;
    GraphicsLayer: typeof __esri.GraphicsLayer;
    Graphic: typeof __esri.Graphic;
    geometryEngine: __esri.geometryEngine;
    coordinateFormatter: __esri.coordinateFormatter;
    TextSymbol: __esri.TextSymbol;
    FeatureLayer: typeof __esri.FeatureLayer;
    GroupLayer: typeof __esri.GroupLayer;
    SketchUtils: any;
    ReactiveUtils: __esri.reactiveUtils;
}
export declare const SketchAPI: React.MemoExoticComponent<(props: SketchAPIProps) => jsx.JSX.Element>;
