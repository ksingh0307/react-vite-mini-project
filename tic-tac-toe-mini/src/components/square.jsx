function Sqaure(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square-box"
    >
      <h1>{props.value}</h1>
    </div>
  );
}

export default Sqaure;
