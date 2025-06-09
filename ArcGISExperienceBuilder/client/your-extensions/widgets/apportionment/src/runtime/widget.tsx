import { type AllWidgetProps, DataSourceComponent, React } from 'jimu-core'

import type {IMConfig, ApportionmentModel} from '../config'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { Label, Select, Tab, Tabs } from 'jimu-ui'
import StatesManager from './components/states-manager'

export default function Widget(props: AllWidgetProps<IMConfig>) {
    const [mapView, setMapView] = React.useState<JimuMapView>(null)
    const [currentModel, setCurrentModel] = React.useState<ApportionmentModel>(null)
    const [totalSeats, setTotalSeats] = React.useState<number>(0)
    const [totalPopulation, setTotalPopulation] = React.useState<number>(342000000)



    return (
        <>
            <JimuMapViewComponent onActiveViewChange={(jmv) => { setMapView(jmv) }} useMapWidgetId={props.useMapWidgetIds[0]}/>
            <DataSourceComponent useDataSource={props.useDataSources[0]} />
            <div>
                <StatesManager models={props.config.models} />
            </div>
        </>
    )
}