import { getAppStore, type ImmutableArray, type IMState, React, ReactRedux } from 'jimu-core'
import { Checkbox, FormGroup, Label, NumericInput, Select, TextInput, Tooltip } from 'jimu-ui'

import { useReactTable } from '@tanstack/react-table'
import { v4 as uuidv4 } from 'uuid'

import type { ApportionmentModel, FederalState } from '../../config'


interface IStatesManagerProps {
    models: ImmutableArray<ApportionmentModel>
}

export default function StatesManager(props: IStatesManagerProps) {
    const [allStates, setAllStates] = React.useState<FederalState[]>([])

    const totalSeats = ReactRedux.useSelector((state: IMState) => state.elecState.totalSeats)

    const currentMethod = ReactRedux.useSelector((state: IMState) => state.elecState.currentMethod)

    const updateTotalSeats = (seats: number) => {
        getAppStore().dispatch({
            type: 'SET_TOTAL',
            val: seats
        })
    }

    const setCurrentMethod = (methodName: string) => {
        const method = props.models.find(m => m.name === methodName);
        if (method) {
            getAppStore().dispatch({
                type: 'SET_METHOD',
                val: method
            });
        }
    }

    /**
     * This function will add a state to the list of states.
    * This is intended for fictional states.
     *
     * @param {Object} state - The state to be added.
     * @param {string} state.name - The name of the state.
     * @param {number} state.pop - The population of the state.
     * @returns {void}
    */
    const addState = (state: { name: string, pop: number }) => { 
        const _uuid = uuidv4()
        const newState: FederalState = {
            name: state.name,
            id: _uuid,
            pop: state.pop,
            seats: 0 // Default to 0 seats, can be adjusted later
        };
        setAllStates([...allStates, newState]);
    }

    React.useEffect(() => { 
        // Every time the totalSeats, allStates, or currentMethod changes, we should recalculate the seats.

        if (totalSeats <= 0 || allStates.length === 0 || !currentMethod) return

        // switch(currentMethod) {
        //     case ''
        // }
    }, [totalSeats, allStates, currentMethod])

    return (
        <div className='d-flex flex-column flex-start align-items-center'>
            <div>
                <h3>Set Total Seats</h3>
                <p>This will set all the seats for the House of Representatives, and defaults to the 2025 value of 435.</p>
                <NumericInput value={totalSeats} onChange={updateTotalSeats} />
            </div>
            <div>
                <h3>Set Apportionment Method</h3>
                <Select value={currentMethod.name} onChange={setCurrentMethod}>
                    {props.models.map(m => (
                        <option value={m.name}>{m.name}</option>
                    ))}
                </Select>
            </div>
            <div>
                <h3>Set States</h3>
                <p>If you want to see how the House might look with Washington DC and Puerto Rico as states, or you're curious about urban vs rural representation, <a href="https://newrepublic.com/article/163879/pandora-papers-abolish-south-dakota" target="_blank">or you think South Dakota shouldn't exist</a>, use the controls below. The first set of checkboxes will give you quick adjustments, but if you have something specific in mind, you can edit the entire list of states below, even their names and populations.</p>
                <h5>Quick options</h5>
                <div className="d-flex flex-row justify-content-around">
                    <Label><Tooltip placement="top" title='Aka Washington DC or the Douglass Commonwealth'><span>Add DC</span></Tooltip>
                        <Checkbox />
                    </Label>
                    <Label>Add Puerto Rico
                        <Checkbox />
                    </Label>
                    <Label>United Dakota
                        <Checkbox />
                    </Label>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <Label>Add City-states
                        <Checkbox />
                    </Label>
                    <Label><Tooltip placement='top' title="Including Sequoyah"><span>Add Native Reservations</span></Tooltip>
                        <Checkbox />
                    </Label>
                    <Label><Tooltip placement='top' title="In case you were wondering"><span>Canada as the 51st state</span></Tooltip>
                        <Checkbox />
                    </Label>
                </div>
                {/* Should probably use Tanstack Table here, for the full state list. */}
            </div>
        </div>
    )
}