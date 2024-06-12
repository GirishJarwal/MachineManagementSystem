import mongoose, { model } from "mongoose";

const MachineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    ccnstatus:{
        type: String,
        required: true
    },
    iolist:{
        type: String,
    },
    vfdparameters:{
        type: String,
    },
    sensorlist:{
        type: String,
    },
    historysheet:{
        type: String,
    },
    alarmlist:{
        type: String,
    },
    electricaldrawing:{
        type: String,
    },
    hmimanual:{
        type: String,
    },
    accesslevel:{
        type: String,
    },
    parameterrange:{
        type: String,
    },
    cfrchecklist:{
        type: String,
    },
    temperatureparameters:{
        type: String,
    },
    motorcommreport:{
        type: String,
    },
    servolicense:{
        type: String,
    },
    zenonlicense:{
        type: String,
    },
    docsmartupload:{
        type: String,
    },
    basicwiring:{
        type: String,
    },
    energizingdate:{
        type: String,
    },
    optionalwiring:{
        type: String,
    },
    optionaltesting:{
        type: String,
    },
    stickers:{
        type: String,
    },
    prefatchecklist:{
        type: String,
    },
    ifatdate:{
        type: String,
    },
    eeifatpoints:{
        type: String,
    },
    ifatclosuredate:{
        type: String,
    },
    cfatdate:{
        type: String,
    },
    eecfatpoints:{
        type: String,
    },
    cfatclosure:{
        type: String,
    },
    eenonissuance:{
        type: String,
    },
    finalphoto:{
        type: String,
    },
    finaldocument:{
        type: String,
    },
    finalprogram:{
        type: String,
    },
    dispatchdate:{
        type: String,
    },
    dispatchmonth:{
        type: String,
    },
    installation:{
        type: String,
    },
    updatemachine:{
        type: String,
    },
    docrelatedcomplaints:{
        type: String,
    },
    logicrelatedcomplaints:{
        type: String,
    },
    details:{
        type: String,
    }
})

const MachineModel = mongoose.model("machine", MachineSchema)
export {MachineModel}