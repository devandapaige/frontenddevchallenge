import { useState } from "react";
import ImageContainer from "./ImageContainer";
import DatePicker from "./DatePicker";

function MainContent() {
  // Putting the user's selected date into the state for the axios GET pull into the API
  const today = new Date().toLocaleDateString();
  const [date, setDate] = useState(today);

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        maxDate={today}
        minDate="06/20/1995"
      />
      <ImageContainer date={date} />
    </div>
  );
}
export default MainContent;
