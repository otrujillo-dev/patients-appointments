import PatientItems from "./PatientsItems"

const PatientsListing = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">Patient listing</h2>
        <p className="text-xl mt-5 mb-10 text-center">Manage your <span className="text-indigo-600 font-bold">Patients and appointments</span></p>
        <PatientItems/>
        <PatientItems/>
        <PatientItems/>
        <PatientItems/>
        
    </div>
  )
}

export default PatientsListing