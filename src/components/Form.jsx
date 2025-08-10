function Form({ category, handleSubmit, setCategory }) {
  const handleChange = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '30px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <label
          htmlFor="news"
          stley={{
            fontWeight: '600',
            marginRight: '10px',
            fontSize: '16px',
          }}
        >
          Choose a Category:
        </label>
        <select
          id="news"
          name="news"
          value={category}
          onChange={handleChange}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginRight: '10px',
            color: '#fff',
            border: '1px solid #999',
            backgroundImage: 'linear-gradient(to bottom, #444, #888)',
          }}
        >
          <option value=""> Choose One </option>
          <option value="general">General</option>
          <option value="world">World</option>
          <option value="nation">Nation</option>
          <option value="business">Buisness</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
        </select>
        <button
          type="submit"
          className="button"
          style={{
            backgroundColor: '#2c6cbf', // Bootstrap-like blue
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '1rem',
          }}
        >
          Get News
        </button>
      </form>
    </>
  );
}

export default Form;
