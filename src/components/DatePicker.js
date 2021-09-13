import { useState } from "react";

export default function DatePicker(props) {
  const [validDate, setValidDate] = useState(false);
  const today = props.maxDate;
  const min = props.minDate;
  const { handleChange } = props;
  return (
    <div>
      <form>
        <input
          type="date"
          selected={date}
          onChange={(date) => {
            if (date < today && date > min) {
              setValidDate(true);
            } else {
              setValidDate(false);
              alert(`Please choose a day between ${min} and ${today}`);
            }
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
