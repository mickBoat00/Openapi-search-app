import './SearchBar.css'

interface searchProps {
  query: string,
  handleOnChange: (text: string) => void,
  handleSubmit: () => void
}

const SearchBar = ({query, handleOnChange, handleSubmit} : searchProps) => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="write gpt powered query based on skills..."  value={query}
        onChange={(e) => handleOnChange(e.target.value)}/>
      <button className="search-button" onClick={handleSubmit} >
        Search
      </button>
    </div>
  )
}

export default SearchBar
