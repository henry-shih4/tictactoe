export default function Square(props) {
  return (
    <>
      <button
        className="bg-red-300 border-solid border-2 border-black text-4xl"
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
}
