import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Failed from "./MissionFailed/Failed";
import Success from "./MissionSuccess/Success";

const Result = () => {
  const [result, setResult] = useState<any>({});
  const [totalTimeTaken, setTotalTimeTaken] = useState<any>(0);

  useEffect(() => {
    setResult(JSON.parse(localStorage.getItem("result") ?? ""));
    setTotalTimeTaken(localStorage.getItem("time taken"));
  }, []);
  console.log(result.status, "set");
  console.log(totalTimeTaken, "time");
  console.log(localStorage.getItem("result"));
  return (
    <div>
      {result.status === "false" ? (
        <Failed totalTimeTaken={totalTimeTaken} />
      ) : (
        <Success result={result} totalTimeTaken={totalTimeTaken} />
      )}
      <Footer />
    </div>
  );
};

export default Result;
