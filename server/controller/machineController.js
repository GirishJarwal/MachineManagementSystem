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

    const existingMachine = await MachineModel.findOne({ name });

    try{
    if (existingMachine) {
      return res.status(400).json({ success: false, message: 'CCN already exists. Please enter a unique CCN.' });
    }
    
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

const getMachine = async (req,res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(401).json({error: "No Id Specified"})
    }
    try{
        const machines = await MachineModel.findOne({_id: id})
        return res.status(200).json({success: true, ...machines._doc})
    } catch (err){
        return res.status(500).json({error: err.message})
    }
}

const updateMachine = async (req,res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(401).json({error: "No Id Specified"})
    }
    try{
        const result = await MachineModel.findByIdAndUpdate({_id: id}, {...req.body}, {new: true})
        return res.status(200).json({success: true, ...result._doc})
    } catch (err){
        return res.status(500).json({error: err.message})
    }
}

const deleteMachine = async (req,res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(401).json({error: "No Id Specified"})
    }
    try{
        const machine = await MachineModel.findOne({_id: id})
        if(!machine){
            return res.status(401).json({error: "No Record Exists"})
        }
        const deleteRecord = await MachineModel.findByIdAndDelete({_id: id})
        const machines = await MachineModel.find({})
        return res.status(200).json({success: true, machines})
    } catch (err){
        return res.status(500).json({error: err.message})
    }
}

export {createMachine, getMachines, getMachine, updateMachine, deleteMachine}