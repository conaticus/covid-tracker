import { ChangeEvent, useState } from "react";
import { CaseDataObject, SetDataFunction } from "../types";

interface Props {
    casesData: CaseDataObject;
    selectedCountry: string;
    setSelectedCountry: SetDataFunction;
}

const CountryFilter = ({
    selectedCountry,
    setSelectedCountry,
    casesData,
}: Props) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [filterSearchValue, setFilterSearchValue] = useState<string>("");

    const countries: string[] = [];
    for (const country in casesData) {
        countries.push(country);
    }

    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(filterSearchValue)
    );

    const onFilterSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterSearchValue(e.target.value);
    };

    const onCountrySelect = (country: string) => {
        setSelectedCountry(country);
        setShowFilter(false);
    };

    return (
        <div>
            <button
                className="filter-btn"
                onClick={() => setShowFilter(!showFilter)}
            >
                {selectedCountry}
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

                {filteredCountries.length === 0 && <p>No results.</p>}

                {filteredCountries.map((country, idx) => (
                    <button
                        key={idx}
                        onClick={() => onCountrySelect(country)}
                        className="filter-option"
                    >
                        {country}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CountryFilter;
