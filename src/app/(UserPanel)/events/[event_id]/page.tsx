"use client";

import { useParams } from "next/navigation";
import React from "react";

const EventPage: React.FC = () => {
  const params = useParams();
  const { event_id } = params;

  if (!event_id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="place-items-center flex items-center justify-center h-[80vh] bg-white ">
      <div className="flex items-start justify-center gap-4 flex-col shadow-lg p-5 rounded-lg border-t-4 border-green-400 ">
        <div className="py-4 px-2 font-bold text-xl">Events page</div>
        <div className="py-4 px-2 font-bold text-xl">Event ID: {event_id}</div>
      </div>
    </div>
  );
};

export default EventPage;
