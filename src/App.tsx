import { useEffect, useState } from "react";
import apiRequest from "./api/apiRequest";
import CaseData from "./components/CaseData";
import SearchFilter from "./components/SearchFilter";
import { CaseDataObject } from "./types";

const App = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("Global");
    const [casesData, setCasesData] = useState<CaseDataObject>();

    useEffect(() => {
        apiRequest("cases", setCasesData);
    }, []);

    const countries: string[] = [];
    for (const country in casesData) {
        countries.push(country);
    }

    if (!casesData) {
        return <p>Loading...</p>;
    } else {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex" }}>
                    <SearchFilter
                        selectedSearch={selectedCountry}
                        setSelectedSearch={setSelectedCountry}
                        searchArray={countries}
                    />
                </div>
                <CaseData countryData={casesData[selectedCountry].All} />
            </div>
        );
    }
};

export default App;
