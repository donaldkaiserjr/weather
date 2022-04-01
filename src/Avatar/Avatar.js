function Avatar(props) {
  return (
    <>
    <p>{props.temp} ℉ /</p>
            <p>{((props.temp * 9) / 5 + 32).toFixed(2)} ℃ </p>
  </>
  )
          }

export default Avatar;
