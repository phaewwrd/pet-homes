import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DateTime({ hdlOnChange, data, setData }) {
  const timeSlots = ["10:00", "12:00", "14:00", "16:00", "18:00", "19:00"];
  // const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleDateChange = (date) => {
    if (!date) return;
    // ใช้ toLocaleDateString() ให้ตรงกับไทม์โซนปัจจุบัน
    const formattedDate = date.toLocaleDateString("en-CA"); // "YYYY-MM-DD"
    setData({ ...data, date: formattedDate });
  };

  const handleTimeChange = (time) => {
    setData({ ...data, time: time });
  };

  console.log("ytyty", data);
  console.log("time", time);
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold">Select Date & Time</h2>

      {/* Calendar */}
      <Calendar
        onChange={(e) => handleDateChange(e)}
        value={data.date ? new Date(data.date) : new Date()} // แปลง string เป็น Date object
        className="border rounded-lg p-2"
      />

      {/* Time Slot Dropdown */}
      <div className="w-48 border p-2 rounded-md flex justify-center">
        <select
          onChange={(e) => handleTimeChange(e.target.value)}
          className="w-full "
          placeholder="Select Date & Time"
        >
          <option disabled selected>
            select time
          </option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Info */}
      {/* {date && time && (
        <div className="mt-4 text-lg font-medium">
          คุณเลือกวันที่ <span className="text-blue-600">{date.toLocaleDateString()}</span> เวลา <span className="text-green-600">{time}</span>
        </div>
      )} */}
    </div>
  );
}

export default DateTime;
