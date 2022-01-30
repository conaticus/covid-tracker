import { useEffect, useState } from "react";
import apiRequest from "./api/apiRequest";
import CaseData from "./components/CaseData";
import CountryFilter from "./components/CountryFilter";
import { CaseDataObject } from "./types";

const App = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("Global");
    const [casesData, setCasesData] = useState<CaseDataObject>();

    useEffect(() => {
        apiRequest("cases", setCasesData);
    }, []);

    if (!casesData) {
        return <p>Loading...</p>;
    } else {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex" }}>
                    <CountryFilter
                        casesData={casesData}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                    />
                    <p style={{ marginLeft: "20px" }}>
                        (updated:{" "}
                        {new Date(
                            casesData[selectedCountry].All.updated
                        ).toLocaleDateString()}
                        )
                    </p>
                </div>
                <CaseData countryData={casesData[selectedCountry].All} />
            </div>
        );
    }
};

export default App;
