import { type SubtypeGroupLayerDataSource, type FeatureDataRecord } from 'jimu-core';
import type { JimuLayerView } from '../layers/jimu-layer-view';
import type { JimuQueriableLayerView } from '../layers/jimu-queriable-layer-view';
export declare function convertSubtypeGrouplayerRecordsToSubtypeSublayerRecords(subtypeGroupLayerDataSource: SubtypeGroupLayerDataSource, subtypeGrouplayerRecords: FeatureDataRecord[]): {
    [subtypeSublayerDataSourceId: string]: FeatureDataRecord[];
};
export declare function publishSelectionChangeMessage(jimuLayerView: JimuQueriableLayerView, records: FeatureDataRecord[]): void;
export declare function getSubtypeField(layer: __esri.SubtypeGroupLayer | __esri.SubtypeSublayer): string;
/**
 * Sort JimuLayerViews by layer rendering order. This method does not change the jimuLayerViews parameter, but returns a new sorted array.
 * @param jimuLayerViews
 * @returns
 */
export declare function sortJimuLayerViewsByLayerOrder(jimuLayerViews: JimuLayerView[]): JimuLayerView[];
