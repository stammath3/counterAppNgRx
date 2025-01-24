import { Action, createAction, props } from "@ngrx/store";

export const INIT = '[Counter] Init';
export const SET = '[Counter] Set';
export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';


export const init = createAction(
    INIT
);

export const set = createAction(
    SET,
    props<{value: number}>()
);


export const increment = createAction(
    INCREMENT,
    props<{value: number}>()
);

export const decrement = createAction(
    DECREMENT,
    props<{value: number}>()
);

//Alternative way

// export class IncrementAction implements Action {
//     readonly type: string = '[Counter] Increment';

//     constructor(public payload: number){}
// }

// export class DecrementAction implements Action {
//     readonly type: string = '[Counter] Decrement';

//     constructor(public payload: number){}
// }


//export type CounterActions = IncrementAction | DecrementAction;