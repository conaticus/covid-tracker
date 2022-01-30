import { CountryDataObject } from "../types";
import CountUp from "react-countup";
import CaseDataPiece from "./CaseDataPiece";

interface Props {
    countryData: CountryDataObject;
}

const CaseData = ({ countryData }: Props) => {
    return (
        <div className="case-data">
            <CaseDataPiece
                name="Cases"
                isCountUp={true}
                value={countryData.confirmed}
            />

            <CaseDataPiece
                name="Deaths"
                isCountUp={true}
                value={countryData.deaths}
            />
        </div>
    );
};

export default CaseData;
