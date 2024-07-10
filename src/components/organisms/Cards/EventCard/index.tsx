import ClubLabel from '@/components/atoms/Label/ClubLabel'
import React from 'react'

const EventCard: React.FC = () => {
    return (
        <div className="flex items-start justify-center gap-2 md:gap-3 flex-col shadow-lg p-3 md:p-5 rounded-xl border">
            <div className="flex gap-3">
                <img src="https://via.placeholder.com/80" alt="event" className="rounded-lg w-16 h-16 md:w-20 md:h-20" />
                <div>
                    <h1 className="font-bold text-2xl">Event Name</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='w-full flex gap-x-6 font-semibold'>
                <div className="flex items-center gap-2">
                    <img src="/assets/icons/DateandTime.svg" alt="calendar" className='w-5 h-5' />
                    <p>25 June, 10:00 AM</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/assets/icons/Location.svg" alt="location" className='w-5 h-5' />
                    <p>AVT</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard