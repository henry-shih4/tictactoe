export default function Square(props) {
  return (
    <>
      <button
        className="bg-red-300 border-solid border-2 border-black"
        value={props.value}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}