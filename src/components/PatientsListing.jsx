import PatientItems from "./PatientsItems"

const PatientsListing = ( { patients, setPatient, deletePatient } ) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        { patients && patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Patient listing</h2>
            <p className="text-xl mt-5 mb-10 text-center">Manage your <span className="text-indigo-600 font-bold">patients and appointments</span></p>
            
            { 
              patients.map( (patientData ) => (
                  <PatientItems
                    key = { patientData.id }
                    patientData = { patientData }
                    setPatient = { setPatient }
                    deletePatient = { deletePatient }
                  />
              )) 
            }
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No patients on the list</h2>
            <p className="text-xl mt-5 mb-10 text-center">Start adding patients and  <span className="text-indigo-600 font-bold">they will appear here</span></p>
          </>
        ) }
    </div>
  )
}

export default PatientsListing