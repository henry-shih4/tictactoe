export default function Square(props) {
  console.log(props.xTurn);
  return (
    <>
      <button
        className={
          props.xTurn
            ? "hover:bg-red-300 border-solid border-2 border-black text-4xl"
            : "hover:bg-blue-300 border-solid border-2 border-black text-4xl"
        }
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
}
