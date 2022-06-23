function RatingSelect({ selectRating, selectedRating }) {
  // NOTES: no need for useState local state as its a duplicate parent state
  //       no need for useEffect or Context either

  const handleChange = (e) => {
    selectRating(+e.currentTarget.value);
  };

  // NOTES: add iteration instead
  return (
    <ul className='rating'>
      {
        (Array.from({ length: 10 }),
        (_, i) => (
          <>
            <li key={`rating-${i + 1}`}>
              <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChange}
                checked={selectedRating === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          </>
        ))
      }
    </ul>
  );
}

export default RatingSelect;
