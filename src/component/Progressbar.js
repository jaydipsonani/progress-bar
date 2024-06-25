import React from 'react'
import './css/Progressbar.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLock, FaUnlock } from "react-icons/fa";

const Progressbar = () => {

    const bookings = [
        { id: 1, title: "Booking 1", date: "2024/04/12 13:00", active: true },
        { id: 2, title: "Booking 2", date: "2024/04/12 13:00", active: true },
        { id: 3, title: "Booking 3", date: "2024/04/12 13:00", active: true },
        { id: 4, title: "Booking 4", date: "2024/04/12 13:00", active: true },
        { id: 5, title: "Booking 5", date: "", active: true },
        { id: 6, title: "Booking 6", date: "", active: false },
        { id: 7, title: "Booking 7", date: "", active: false },
        { id: 8, title: "Booking 8", date: "", active: false },
        { id: 9, title: "Booking 9", date: "", active: false },
        { id: 10, title: "Booking 10", date: "", active: false }
    ];

    const activeBookings = bookings.filter(booking => booking.active).length;
    const totalBookings = bookings.length;
    const highlightHeight = (activeBookings / totalBookings) * 100 + '%';
    console.log("highlightHeight: " + highlightHeight)

    return (
        <div style={{ marginTop: "1%", '--highlight-height': highlightHeight }} className='highlight-height'>
            <VerticalTimeline className='hello' layout={'1-column-left'} lineColor={"lightgrey"}  >
                {bookings.map((booking, index) => {
                    return (
                        <VerticalTimelineElement
                            key={booking.id}
                            date={booking.date}
                            className={`vertical-timeline-element ${booking.active ? 'active-line' : 'inactive-line'}`}
                            iconStyle={{ background: booking.active ? 'darkorange' : 'lightgray', color: '#fff' }}
                            contentStyle={{ borderRadius: '20px', height: '100px', bottom: '28px', background: booking.active ? 'darkorange' : 'lightgray', color: '#fff' }}
                            contentArrowStyle={{ top: '40px', borderRight: `7px solid ${booking.active ? 'darkorange' : 'lightgray'}` }}
                            icon={booking.active ? <FaUnlock /> : <FaLock style={{ color: "black" }} />}
                        >
                            <h3 style={{ color: booking.active ? 'white' : 'black' }} className="vertical-timeline-element-title">{booking.title}</h3>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>

    )
}

export default Progressbar
