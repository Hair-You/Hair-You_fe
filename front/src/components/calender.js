import { useNavigate } from "react-router-dom";

import googleCalendarPlugin from '@fullcalendar/google-calendar';

import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
import axios from "axios";ㄴ

function Calendar() {

    const navigate = useNavigate();
    // const api_key = "AIzaSyD-zVEehdfIqaeN9s944ahImpAvzOpG2do"ㄴ

    const dateClick = (e) => {
        //navigate('/login')
    }
    //dateStr : 날짜 출력 "yyyy-mm-dd"


    return (
        <>

            <div style={{ width: "1000px" }}>
                <FullCalendar

                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]} //플러그인 설치
                    initialView="dayGridMonth" //처음 보여주는 뷰
                    weekends={true} //주말 포함 여부d
                    googleCalendarApiKey={api_key}
                    height={'600px'}
                    headerToolbar={
                        {
                            start: 'today',
                            center: 'title',
                            end: 'listDay,listWeek,listMonth prev,next',
                        }
                    }
                    events={{
                        googleCalendarId: 'diddnjswns20@gmail.com',
                    }}
                    dateClick={dateClick}
                    views={{
                        listDay: { buttonText: 'Day' },
                        listWeek: { buttonText: 'Week' },
                        listMonth: { buttonText: 'Month' },
                    }}

                />
            </div>
        </>
    )
}