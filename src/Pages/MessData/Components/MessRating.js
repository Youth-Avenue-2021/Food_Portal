import ProgressBar from "react-customizable-progressbar";

const MessRating = ({ rating }) => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto rounded-full shadow-xl w-min">
        <ProgressBar radius={50} progress={rating} fillColor="#ffffff" strokeWidth={7} strokeColor="#0284c7" trackStrokeWidth={7} pointerRadius={1} pointerStrokeWidth={2} pointerStrokeColor="#ebebeb" />
        <p className="absolute text-2xl">{rating}%</p>
      </div>
    </>
  );
};

export default MessRating;
