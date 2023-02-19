import { getAndUpdateSeries } from './common.js'

// ##########################
// #### Define Variables ####
// ##########################
export function setVariables(self) {
	const SERIES = getAndUpdateSeries(self)
	// console.log(SERIES);

	// console.log('variable set');
	// console.log(self.config.model);
	// console.log(self.data.model);
	// console.log(self.data.modelTCP);
	// console.log(self.data.series);
	const variables = []

	variables.push({ variableId: 'series', name: 'Camera Series' })
	variables.push({ variableId: 'model', name: 'Model of camera' })
	variables.push({ variableId: 'name', name: 'Name of camera' })
	if (SERIES.variables.version) {
		variables.push({ variableId: 'version', name: 'Firmware Version' })
	}
	if (SERIES.variables.error) {
		variables.push({ variableId: 'error', name: 'PTZ Error Codes' })
	}
	if (SERIES.variables.ins) {
		variables.push({ variableId: 'ins', name: 'Install Position' })
	}
	if (SERIES.variables.power) {
		variables.push({ variableId: 'power', name: 'Power ON/OFF' })
	}
	if (SERIES.variables.tally) {
		variables.push({ variableId: 'tally', name: 'Tally ON/OFF' })
	}
	if (SERIES.variables.OAF) {
		variables.push({ variableId: 'OAF', name: 'Auto Focus Mode' })
	}
	if (SERIES.variables.ColorTemperature) {
		variables.push({ variableId: 'ColorTemperature', name: 'Color Temperature' })
	}
	if (SERIES.variables.BlueGain) {
		variables.push({ variableId: 'BlueGain', name: 'Color Correction Blue Gain' })
	}
	if (SERIES.variables.RedGain) {
		variables.push({ variableId: 'RedGain', name: 'Color Correction Red Gain' })
	}
	if (SERIES.variables.iris) {
		variables.push({ variableId: 'irisMode', name: 'Auto Iris Mode' })
	}
	if (SERIES.variables.gainValue) {
		variables.push({ variableId: 'gainValue', name: 'Gain Value' })
	}
	if (SERIES.variables.preset) {
		variables.push({ variableId: 'presetMode', name: 'Preset Mode' })
	}
	variables.push({ variableId: 'ptSpeedVar', name: 'Pan/Tilt Speed' })
	variables.push({ variableId: 'zSpeedVar', name: 'Zoom Speed' })
	variables.push({ variableId: 'fSpeedVar', name: 'Focus Speed' })
	return variables
}

// #########################
// #### Check Variables ####
// #########################
export function checkVariables(self) {
	const SERIES = getAndUpdateSeries(self)

	const gainValue = SERIES.actions.gain
		? SERIES.actions.gain.dropdown.find((GAIN) => GAIN.id == self.data.gainValue)
		: null

	const ColorTemperature = SERIES.actions.ColorTemperature
		? SERIES.actions.ColorTemperature.dropdown.find((ColorTemperature) => ColorTemperature.id == self.data.ColorTemperature)
		: null

	const BlueGain = SERIES.actions.BlueGain 
		? SERIES.actions.BlueGain.dropdown.find((BlueGain) => BlueGain.id == self.data.BlueGain) 
		: null
	
	const RedGain = SERIES.actions.RedGain 
		? SERIES.actions.RedGain.dropdown.find((RedGain) => RedGain.id == self.data.RedGain) 
		: null


	self.setVariableValues({
		series: self.data.series,
		model: self.data.model,
		name: self.data.name,
		version: self.data.version,
		error: self.data.error,
		ins: self.data.ins,
		power: self.data.power,
		tally: self.data.tally,
		OAF: self.data.oaf,
		ColorTemperature: ColorTemperature?.label,
		BlueGain: BlueGain?.label,
		RedGain: RedGain?.label,
		irisMode: self.data.irisMode,
		gainValue: gainValue?.label,
		presetMode: self.data.recallModePset,
		ptSpeedVar: self.ptSpeed,
		zSpeedVar: self.zSpeed,
		fSpeedVar: self.fSpeed,
	})
}
