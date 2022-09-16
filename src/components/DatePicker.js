import React, { useState, useEffect, useRef } from "react";
import '../styles/DatePicker.css';

function DatePicker({id}) {

    let oneDay = 60 * 60 * 24 * 1000;
    let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
    let inputRef = useRef(null);
    let date = new Date();

    const [showDatePicker, showingDatePicker] = useState(false);
    const [year,setYear] = useState(date.getFullYear());
    const [month,setMonth] = useState(date.getMonth());
    const [selectedDay,setSelectedDay] = useState(todayTimestamp);
    

    useEffect(() => {
        window.addEventListener("click", function (event) {
            let ignore = inputRef.current;
            let ignore2 = document.getElementById('dateContainer');
            let target = event.target;
            if (ignore2 !== null) {
            if (target === ignore || ignore2.contains(target)) {
                return;
            }else if(showDatePicker === true && target !== ignore) {
                showingDatePicker(false);
            }}
            
        });
      }, [showDatePicker, inputRef]);

    let daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const getDayDetails = (args) => {
        let date = args.index - args.firstDay; 
        let day = args.index%7;
        let prevMonth = args.month-1;
        let prevYear = args.year;
        if(prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month, 
            timestamp,
            dayString: daysMap[day]
        }
    }

    const getNumberOfDays =(year, month)=> {
        return 40 - new Date(year, month, 40).getDate();
    }

    const getMonthDetails =(year, month)=> {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0; 
        let cols = 7;

        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) { 
                currentDay = getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    const [monthDetails,setmonthDetails] = useState(getMonthDetails(year, month));

    const isCurrentDay = (day) => {
        return day.timestamp === todayTimestamp;
    }

    const isSelectedDay = (day)=> {
        return day.timestamp === selectedDay;
    }

    const getDateFromDateString = (dateValue) => {
        let dateData = dateValue.split('-').map(d=>parseInt(d, 10));
        if(dateData.length < 3) 
            return null;

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }

    const getMonthStr = (month) => monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

    const getDateStringFromTimestamp = (timestamp) => {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth()+1;
        let date = dateObject.getDate();
        return dateObject.getFullYear() + '-' + (month < 10 ? '0'+month : month) + '-' + (date < 10 ? '0'+date : date);
    }

    const setDate = (dateData) => {
        setSelectedDay(new Date(dateData.year, dateData.month-1, dateData.date).getTime())
    }

    const updateDateFromInput =()=> {
        let dateValue = inputRef.current.value;
        let dateData = getDateFromDateString(dateValue);
        if(dateData !== null) { 
            setDate(dateData);
            setYear(dateData.year);
            setMonth(dateData.month-1);
            setmonthDetails(getMonthDetails(dateData.year, dateData.month-1))
        }
    }

    const setDateToInput = (timestamp) => {
        let dateString = getDateStringFromTimestamp(timestamp);
        inputRef.current.value = dateString;
    }


    const onDateClick = (day) => {
        setSelectedDay(day.timestamp)
        setDateToInput(day.timestamp)
    }

    const changeYear = (offset) => {
        setYear(year + offset)
        setMonth(month)
        setmonthDetails(getMonthDetails(year, month))
    }

    const changeMonth = (offset) => {
        let newYear = year;
        let newMonth = month + offset;
        if(newMonth === -1) {
            newMonth = 11;
            newYear--;
            setYear(newYear)
            setMonth(newMonth)
        } else if(newMonth === 12) {
            newMonth = 0;
            newYear++;
            setYear(newYear)
            setMonth(newMonth)
        } else {
            setYear(newYear)
            setMonth(newMonth)
        }
        setmonthDetails(getMonthDetails(year, month + offset))
    }

    function test() {
        showingDatePicker(true)
    }


    function renderCalendar() {
        let days = monthDetails.map((day, index)=> {
            return (
                <div className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') + 
                    (isCurrentDay(day) ? ' highlight' : '') + (isSelectedDay(day) ? ' highlight-green' : '')} key={index}>
                    <div className='cdc-day'>
                        <span onClick={()=>onDateClick(day)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <div className='c-container'>
                <div className='cc-head'>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d,i)=><div key={i} className='cch-name'>{d}</div>)}
                </div>
                <div className='cc-body'>
                    {days}
                </div>
            </div>
        )
    }

    return <div className='DatePicker'>
        <div className='mdp-input'  onClick={test}>
                    <input type='date' id={id} onChange={updateDateFromInput} ref={inputRef}/>
                </div>
                {showDatePicker && <div className='mdp-container' id="dateContainer">
                        <div className='mdpc-head'>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={()=> changeYear(-1)}>
                                    <span className='mdpchbi-left-arrows'></span>
                                </div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={()=> changeMonth(-1)}>
                                    <span className='mdpchbi-left-arrow'></span>
                                </div>
                            </div>
                            <div className='mdpch-container'>
                                <div className='mdpchc-year'>{year}</div>
                                <div className='mdpchc-month'>{getMonthStr(month)}</div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={()=> changeMonth(1)}>
                                    <span className='mdpchbi-right-arrow'></span>
                                </div>
                            </div>
                            <div className='mdpch-button' onClick={()=> changeYear(1)}>
                                <div className='mdpchb-inner'>
                                    <span className='mdpchbi-right-arrows'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mdpc-body'>
                            {renderCalendar()}
                        </div>
                    </div>
                }
           </div>       
}

export default DatePicker