const PatientItems = ( { patientData, setPatient } ) => {
    const { name, owner, email, discharge, symptoms } = patientData;
    return (
        <>
            <div className="mt-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Name: <span className="font-normal normal-case">{ name }</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Owner name: <span className="font-normal normal-case">{ owner }</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: <span className="font-normal normal-case">{ email }</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Discharge date: <span className="font-normal normal-case">{ discharge }</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: <span className="font-normal normal-case">{ symptoms }</span></p>
                <div className="flex justify-between mt-10">
                    <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg font-bold" 
                        onClick={ () => setPatient(patientData) }>Edit</button>
                    <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg font-bold">Delete</button>
                </div>
            </div>
        </>
    )
}

export default PatientItems;