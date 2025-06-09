import  { type extensionSpec, type IMState, Immutable, type ImmutableObject } from "jimu-core"
import type { ApportionmentModel, FederalState, IParty } from "../config"
// import { Immutable } from "seamless-immutable"

export enum ElectoralActionKeys {
    TOTAL = "SET_TOTAL",
    METHOD = "SET_METHOD",
    STATEPOP = "SET_STATE_POP",
    STATENAME = "SET_STATE_NAME",
    ADDSTATE = "ADD_STATE",
    DELETESTATE = "DELETE_STATE",
    ADDPARTY = "ADD_PARTY",
    DELETEPARTY = "DELETE_PARTY",
    PARTYNAME = "SET_PARTY_NAME",
    PARTYCOLOR = "SET_PARTY_COLOR",
    PARTYVOTES = "SET_PARTY_VOTES"
}

export interface SetTotalSeatsAction {
    type: ElectoralActionKeys.TOTAL,
    val: number
}

export interface SetMethodAction {
    type: ElectoralActionKeys.METHOD,
    val: string
}

export interface SetStatePopAction {
    type: ElectoralActionKeys.STATEPOP,
    val: {
        id: string
        pop: number
    }
}

export interface SetStateNameAction {
    type: ElectoralActionKeys.STATENAME,
    val: {
        id: string
        name: string
    }
}

export interface AddStateAction {
    type: ElectoralActionKeys.ADDSTATE,
    val: {
        name: string
        pop: number
    }
}

export interface DeleteStateAction {
    type: ElectoralActionKeys.DELETESTATE,
    val: string
}

export type ElectoralReformActionsTypes = SetMethodAction | SetStateNameAction | SetStatePopAction | AddStateAction | DeleteStateAction | SetTotalSeatsAction

interface IReformState {
    states: FederalState[]
    currentMethod: ApportionmentModel | null
    totalSeats: number
    parties: IParty[]
}

type IMReformState = ImmutableObject<IReformState>

declare module 'jimu-core/lib/types/state' {
    interface State {
        elecState?: IMReformState
    }
}

export default class ElecStoreExtension implements extensionSpec.ReduxStoreExtension {
    id = 'electoral-reform-redux-extension'

    getInitLocalState() {
        return {
            states: [],
            currentMethod: null,
            totalSeats: 435,
            parties: []
        }
    }

    getActions() {
        return Object.keys(ElectoralActionKeys).map(k => ElectoralActionKeys[k])
    }

    getReducer() {
        return (localState: IMReformState, action: ElectoralReformActionsTypes, state: IMState): IMReformState => {
            switch (action.type) {
                case ElectoralActionKeys.TOTAL:
                    return localState.setIn(["totalSeats"], action.val)
                case ElectoralActionKeys.ADDSTATE:
                    return localState.setIn(["states"], [...localState.states, action.val])
                case ElectoralActionKeys.DELETESTATE:
                    return localState.setIn(["states"], localState.states.filter(s => s.id !== action.val))
                case ElectoralActionKeys.STATENAME:
                    const _unamestate = localState.states.find(s => s.id === action.val.id)
                    _unamestate.name = action.val.name
                    let nameArr = Immutable.asMutable(localState.states.filter(s => s.id !== action.val.id))
                    nameArr = [...nameArr, _unamestate]
                    return localState.setIn(["states"], nameArr)
                case ElectoralActionKeys.STATEPOP:
                    const _upopstate = localState.states.find(s => s.id === action.val.id)
                    _upopstate.pop = action.val.pop
                    let popArr = Immutable.asMutable(localState.states.filter(s => s.id !== action.val.id))
                    popArr = [...popArr, _upopstate]
                    return localState.setIn(["states"], popArr)
                case ElectoralActionKeys.METHOD:
                    return localState.setIn(["currentMethod"], action.val)
            }
        }
    }

    getStoreKey() {
        return 'elec-state'
    }
}