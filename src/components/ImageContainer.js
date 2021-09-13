import DescriptionContainer from "./DescriptionContainer";

export default function ImageContainer(props) {
  return (
    <div>
      <h2>IMAGE</h2>
      <p>{props.date}</p>
      <DescriptionContainer date={props.date} />
    </div>
  );
}
