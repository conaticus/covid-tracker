import { ChangeEvent, useState } from "react";
import { SetDataFunction } from "../types";

interface Props {
    selectedSearch: string;
    setSelectedSearch: SetDataFunction;
    searchArray: string[];
}

const SearchFilter = ({
    selectedSearch,
    setSelectedSearch,
    searchArray,
}: Props) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [filterSearchValue, setFilterSearchValue] = useState<string>("");

    const filteredSearch = searchArray.filter((search) =>
        search.toLowerCase().includes(filterSearchValue)
    );

    const onFilterSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterSearchValue(e.target.value);
    };

    const onSearchSelect = (search: string) => {
        setSelectedSearch(search);
        setShowFilter(false);
    };

    return (
        <div>
            <button
                className="filter-btn"
                onClick={() => setShowFilter(!showFilter)}
            >
                {selectedSearch}
            </button>

            <div
                className="filter-bg"
                style={{
                    display: showFilter ? "block" : "none",
                    position: "absolute",
                }}
            >
                <div className="filter-input-parent">
                    <input
                        autoFocus={true}
                        value={filterSearchValue}
                        onChange={(e) => onFilterSearchChange(e)}
                        className="filter-input"
                        type="text"
                        placeholder="Search"
                    />
                </div>

                {filterSearchValue.length === 0 && <p>No results.</p>}

                {filteredSearch.map((search, idx) => (
                    <button
                        key={idx}
                        onClick={() => onSearchSelect(search)}
                        className="filter-option"
                    >
                        {search}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchFilter;
