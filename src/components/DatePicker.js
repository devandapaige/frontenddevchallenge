// import { useState } from "react";

export default function DatePicker(props) {
  //   const [validDate, setValidDate] = useState(false);
  const today = props.maxDate;
  const min = props.minDate;
  console.log(props);
  return (
    <div>
      <form>
        <input type="date" min={min} max={today} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <button>Random</button>
        <button>Today</button>
      </div>
    </div>
  );
}
