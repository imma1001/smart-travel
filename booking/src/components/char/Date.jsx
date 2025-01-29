import { BsCalendar2DateFill } from "react-icons/bs";

function Date({ start, end, onStartChange, onEndChange }) {
 
  return (
    <div className="flex items-center gap-10 p-4">
      <div className="flex items-center gap-2">
        <BsCalendar2DateFill className="text-3xl text-blue-900" />
        <div className="flex flex-col">
        <label className="text-lg font-medium text-gray-700">From</label>
        <input
          id="start-date"
          type="date"
          value={start}
          onChange={(e) => onStartChange(e.target.value)}
          className="p-3 border rounded-md"
        />
        </div>
      </div>
{console.log(start)}
    
      <div className="flex items-center gap-2">
        <BsCalendar2DateFill className="text-3xl text-blue-900" />
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">To</label>
          <input
          id="end-date"
          type="date"
          value={end}
          min={start}
          onChange={(e) => onEndChange(e.target.value)}
          className="p-3 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Date;
