export {DidDoc, VerificationMethod, Service, DidDocWithMetadata, Metadata} from './diddoc';
export {FeeParams, FeeParams_TxTypesEntry} from './fee';
export {MsgCreateDidDoc,
    MsgUpdateDidDoc,
    MsgDeactivateDidDoc,
    SignInfo,
    MsgCreateDidDocPayload,
    MsgCreateDidDocResponse,
    MsgUpdateDidDocPayload,
    MsgUpdateDidDocResponse,
    MsgDeactivateDidDocPayload,
    MsgDeactivateDidDocResponse,
    Msg
} from './tx';
export {
    QueryGetDidDocRequest,
    QueryGetDidDocResponse,
    QueryGetDidDocVersionRequest,
    QueryGetDidDocVersionResponse,
    QueryGetAllDidDocVersionsMetadataRequest,
    QueryGetAllDidDocVersionsMetadataResponse,
    Query
} from './query';
export {DidDocVersionSet, GenesisState} from './genesis'