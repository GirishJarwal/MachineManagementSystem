import express from 'express'
import { MachineModel } from '../models/Machine.js'

const createMachine = async (req,res) => {
    const{name,customer, city, model, ccnstatus, iolist,
        vfdparameters, sensorlist,historysheet, alarmlist, electricaldrawing,
        hmimanual, accesslevel,parameterrange, cfrchecklist,
        temperatureparameters,motorcommreport, servolicense,
        zenonlicense, docsmartupload, basicwiring, energizingdate,
        optionalwiring, optionaltesting, stickers, prefatchecklist,
        ifatdate, eeifatpoints, ifatclosuredate, cfatdate, eecfatpoints,
        cfatclosure, eenonissuance,finalphoto,  finaldocument, finalprogram,
        dispatchdate, dispatchmonth, installation, updatemachine,
        docrelatedcomplaints, logicrelatedcomplaints, details
    } = req.body;
    
    try{
    const newMachine = new MachineModel({
        name, //ccn
        customer,
        city,
        model,
        ccnstatus,
        iolist,
        vfdparameters,
        sensorlist,
        historysheet,
        alarmlist,
        electricaldrawing,
        hmimanual,
        accesslevel,
        parameterrange,
        cfrchecklist,
        temperatureparameters,
        motorcommreport,
        servolicense,
        zenonlicense,
        docsmartupload,
        basicwiring,
        energizingdate,
        optionalwiring,
        optionaltesting,
        stickers,
        prefatchecklist,
        ifatdate,
        eeifatpoints,
        ifatclosuredate,
        cfatdate,
        eecfatpoints,
        cfatclosure,
        eenonissuance,
        finalphoto,
        finaldocument,
        finalprogram,
        dispatchdate,
        dispatchmonth,
        installation,
        updatemachine,
        docrelatedcomplaints,
        logicrelatedcomplaints,
        details
    })

    const result = await newMachine.save()
    return res.status(201).json({success:true, ...result._doc})
}catch(err){
    return res.status(500).json(err.message);
}
};

const getMachines = async (req,res) => {
    try{
        const machines = await MachineModel.find({})
        return res.status(200).json({success: true, machines})
    } catch (err){
        return res.status(500).json({error: err.message})
    }
}

export {createMachine, getMachines}