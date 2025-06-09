/** @jsx jsx */
import { jsx, type ImmutableArray, type UseDataSource } from 'jimu-core';
import { type SearchDataConfig, type IMDataSourceCreateStatus } from '../type/type';
interface SearchOptionsProps {
    id: string;
    showSourcePanel: boolean;
    showNewSourceItem: boolean;
    dsConfigItemIndex: number;
    datasourceConfig: ImmutableArray<SearchDataConfig>;
    useDataSources: ImmutableArray<UseDataSource>;
    createOutputDs: boolean;
    dataSourceCreateStatus: IMDataSourceCreateStatus;
    className?: string;
    onDsConfigIdChange: (configItemIndex: number, isGeocodeSource?: boolean) => void;
    updateConfigForLayerOptions: (datasourceConfig: ImmutableArray<SearchDataConfig>) => void;
    hideSidePopper: () => void;
}
declare const DatasourceList: (props: SearchOptionsProps) => jsx.JSX.Element;
export default DatasourceList;
