import React from 'react'
import MakeAppointmentForm from '../../components/Appointment/MakeAppointmentForm'
import usePetStore from '../../stores/pet-store';

function UserMakeappoinement() {
    // const pet = usePetStore((state)=> state.pet);
    // const {location, setLocation} = useLocationStore();
  return (
    <div>
        <MakeAppointmentForm />
    </div>
  )
}

export default UserMakeappoinement