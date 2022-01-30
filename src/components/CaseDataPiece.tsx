import CountUp from "react-countup";

interface Props {
    name: string;
    isCountUp?: boolean;
    value: any;
}

const CaseDataPiece = ({ name, isCountUp = false, value }: Props) => {
    return (
        <div>
            <h4>{name}</h4>
            <h3>
                {isCountUp && (
                    <CountUp duration={1} separator="," end={value} />
                )}
                {!isCountUp && value}
            </h3>
        </div>
    );
};

export default CaseDataPiece;
