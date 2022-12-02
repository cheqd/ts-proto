import { SignInfo } from '../v2/tx';
export {KeyValuePair} from './common';
export {Did, VerificationMethod, Service} from './did';
export {
    MsgCreateDid, 
    MsgUpdateDid, 
    MsgDeactivateDid, 
    SignInfo, 
    MsgDeactivateDidPayload, 
    MsgDeactivateDidResponse, 
    MsgCreateDidPayload, 
    MsgCreateDidResponse, 
    MsgUpdateDidPayload,
    MsgUpdateDidResponse
} from './tx';

export {StateValue, Metadata} from './stateValue';
export {QueryGetDidRequest, QueryGetDidResponse, Query} from './query';
export {GenesisState} from './genesis';
