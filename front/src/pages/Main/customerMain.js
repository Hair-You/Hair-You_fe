import { useNavigate } from "react-router-dom";

import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"

function CustomerMain() {

    const navigate = useNavigate();

    const dateClick = (e) => {
        //navigate('/login')
    }
    //dateStr : 날짜 출력 "yyyy-mm-dd"

    return (
        <>
            <div style={{ width: "1000px" }}>
                <FullCalendar

                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]} //플러그인 설치
                    initialView="dayGridMonth" //처음 보여주는 뷰
                    weekends={true} //주말 포함 여부
                    height={'600px'}
                    headerToolbar={
                        {
                            start: 'today',
                            center: 'title',
                            end: 'listDay,listWeek,listMonth prev,next',
                        }
                    }
                    events={[
                        { id: 1, title: 'startDay', date: '2023-11-01' }
                    ]}
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

export default CustomerMain;