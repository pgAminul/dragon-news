import moment from "moment";

export default function Time() {
  const currentTime = moment().format("dddd, MMMM Do YYYY");
  return (
    <div>
      <p className="font-bold py-1">{currentTime}</p>
    </div>
  );
}
