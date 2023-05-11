const PatientItems = () => {
    return (
        <>
            <div className="mt-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Name: <span className="font-normal normal-case">Hola</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Owner name: <span className="font-normal normal-case">Omar Trujillo</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: <span className="font-normal normal-case">otrujillo.dev@gmail.com</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Discharge date: <span className="font-normal normal-case">21/05/2023</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: <span className="font-normal normal-case">lorem ips</span></p>
            </div>
        </>
    )
}

export default PatientItems;