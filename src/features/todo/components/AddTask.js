import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import dayjs from "dayjs";
import { addTaskRequest, taskRequest } from "../reducer/taskSlice";




export default function TaskAdd() {
    const dateFormat = (date) => dayjs(date).format("YYYY-MM-DD hh:mm");
    const today = new Date()
    const [date, setDate] = useState(dateFormat(today))

    const defaultValues = {
        user_id: 1, //로그인 되면 id 넣기
        title: '',
        classification: '',
        start: date,
        end: '',
        location: '', 
        completion: '', 
        description: '', 
    };
    const dispatch = useDispatch()

    const { handleSubmit, reset, getValues } = useForm({
        defaultValues,
    });
    function onSubmit() {
        reset(defaultValues);
    }
    


    return (<>
        <form>
            {/* <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
            </label>
            </h2> */}
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="What needs to be done?"
            />
            <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg"
                onSubmit= {handleSubmit(async (data) => { await dispatch(addTaskRequest({
                ...data,
               })) })}
            >
                Add
            </button>
        </form>   
    </>)
}