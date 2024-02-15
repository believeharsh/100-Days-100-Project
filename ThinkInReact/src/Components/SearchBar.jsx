

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <div className=" bg-slate-800 px-3 py-2">
      <form className="text-center">
        <input className="border-black border-[1px] rounded-xl px-3 py-2"
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label className="ml-3 text-white">
          <input className="px-3 py-2"
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          Don't show unavailable products
         
        </label>
      </form>
      </div>
    );
  }


  export default SearchBar ;  