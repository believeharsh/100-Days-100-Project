

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form className="text-center mt-3">
        <input className="border-black border-[1px] rounded-xl px-3 py-2"
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label className="ml-3">
          <input className="px-3 py-2"
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          
         
        </label>
      </form>
    );
  }


  export default SearchBar ;  