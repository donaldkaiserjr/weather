function Avatar(props) {
  return (
    <>
      <p>{Math.round(props.temp)} ℉ /</p>
      <p>{Math.round(((props.temp - 32) * 5) / 9)} ℃</p>
    </>
  );
}

export default Avatar;
