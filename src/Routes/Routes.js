import { Routes as AppRoutes, Route } from "react-router-dom";
import Step1 from "../Pages/Step1/Step1";
import Step2 from "../Pages/Step2/Step2";
import Step3 from "../Pages/Step3/Step3";
import Step4 from "../Pages/Step4/Step4";
import Summary from "../Pages/Summary/Summary";
import Cvlist from "../Pages/CVList/Cvlist";
import Cvdetails from "../Pages/CVDetails/Cvdetails";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/step1" element={<Step1/>} />
      <Route path="/step2" element={<Step2/>} />
      <Route path="/step3" element={<Step3/>} />
      <Route path="/step4" element={<Step4/>} />
      <Route path="/summary" element={<Summary/>} />
      <Route path="/cvs" element={<Cvlist/>} />
      <Route path="/cvs/:id" element={<Cvdetails/>} />
    </AppRoutes>
  );
};

export default Routes;
