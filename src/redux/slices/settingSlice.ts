import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAddress, getAddressAccept, getCity } from "../../utils/getAddress";
import { getSettings, getSettingsError, getRegistered } from '../../utils/getSettings'


interface SettingState{
	values:string[];
registered:boolean,
addressInput:string,
cityInput:string,
inputIsError:boolean[];
cityError:boolean,
addressError:boolean,
addressAccept:boolean, 
arrCity:string[]
}

const initialState:SettingState ={

values:getSettings(),
registered:getRegistered(),
addressInput:getAddress(),
cityInput:getCity(),
inputIsError:getSettingsError(),
cityError:true,
addressError:true,
addressAccept:getAddressAccept(), 
    
   
arrCity:[
'Abovyan', 'Akhtala', 'Alaverdi', 'Aparan', 'Ararat', 
'Armavir', 'Artashat', 'Artik', 'Ashtarak','Ayrum',
 'Berd', 'Byureghavan', 'Chambarak', 'Charentsavan', 
 'Dilijan', 'Gavar', 'Goris', 'Gyumri',  'Hrazdan',
 'Ijevan', 'Jermuk', 'Kajaran', 'Kapan', 'Maralik',
  'Martuni', 'Masis', 'Meghri','Metsamor', 'Nor Hachn',
   'Noyemberyan', 'Sevan', 'Sisian', 'Spitak', 'Stepanavan',
    'Talin', 'Tashir', 'Tsaghkadzor', 'Tumanyan', 
    'Vagharshapat','Vanadzor', 'Vardenis', 'Vayk', 
    'Vedi', 'Yeghegnadzor','Yeghvard', 'Yerevan',]
}
 
const settingSlice=createSlice({
	name:'setting',
	initialState,
	reducers:{

setValues(state , action: PayloadAction<string[]>){
	state.values=action.payload
},
setRegistered(state , action: PayloadAction<boolean>){
	state.registered=action.payload
},
 setAddressInput(state,action: PayloadAction<string>){
 	state.addressInput=action.payload
 },
 setCityInput(state,action: PayloadAction<string>){
 	state.cityInput=action.payload
 },
 setInputIsError(state,action: PayloadAction<boolean[]>){
 	state.inputIsError=action.payload
 },
 setAddressError(state,action: PayloadAction<boolean>){
 	state.addressError=action.payload
 },
 setCityError(state,action: PayloadAction<boolean>){
 	state.cityError=action.payload
 },
 setAddressAccept(state,action: PayloadAction<boolean>){
 	state.addressAccept=action.payload
 }
	}
})

export const {
	setValues,
	setRegistered,
	setAddressInput,
	setCityInput,
	setInputIsError,
	setAddressError,
	setCityError,
	setAddressAccept

} = settingSlice.actions;

export const selectSetting=(state:RootState)=>state.setting

export default settingSlice.reducer