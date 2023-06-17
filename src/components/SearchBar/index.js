import Card from "../Card";


export default function SearchBar() {

    function handleSearchValue(event){
        <Card searchValue={event.target.value} />
    }

    return (
    <div>
        <div className="search">
            <input
            type="text"
            placeholder="Pesquisar..."
            onChange={handleSearchValue}
            />
        </div>

        <Card/>
        <Card/>
        <Card/>
    </div>
    );
}

  
