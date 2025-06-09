import type { DataSourceTypes } from './common-data-source-interface'
import type { SceneLayerDataSource } from './scene-layer-data-source-interface'

export interface BuildingComponentSubLayerDataSource extends Omit<SceneLayerDataSource, 'type'> {
  type: DataSourceTypes.BuildingComponentSubLayer
}
