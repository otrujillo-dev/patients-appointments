import { useState, useEffect } from 'react';


const Form = () => {

    const [name, setName ] = useState('');
    const [owner, setOwner ] = useState('');
    const [email, setEmail ] = useState('');
    const [discharge, setDischarge ] = useState('');
    const [symptoms, setSymptoms ] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //Form validation 
        if( [name, owner, email, discharge, symptoms].includes('') ){            
            setError(true);
            return;
        }

        setError(false);
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
            <p className="text-lg mt-5 text-center mb-10">Add and manage <span className="text-indigo-600 font-bold">Patients</span></p>
            
            { error && (
                    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                        <p>All inputs are required, please fill all...</p>
                    </div>)}

            <form className="bg-white shadow-md rounded-lg py-10 px-10 mb-10" onSubmit={ handleSubmit }>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="pet">Pet name:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Enter the pet name" id="pet" value={name} onChange={ (e) => setName( e.target.value )  } />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="owner_name">Name of the owner:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Enter the owner of the pet" id="owner_name" value={owner} onChange={ (e) => setOwner( e.target.value )  }/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Enter your e-mail" id="email" value={email} onChange={ (e) => setEmail( e.target.value )  }/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="discharge_date">Discharge date:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" id="discharge_date" value={discharge} onChange={ (e) => setDischarge( e.target.value )  }/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Symptoms:</label>
                    <textarea className="border-2 w-full p-2 mt-2" placeholder="Describe the symptoms..." id="symptoms" value={symptoms} onChange={ (e) => setSymptoms( e.target.value )  }/>
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Send"/>
            </form>
        </div>
    )
}

export default Form