const prisma = require("../configs/prisma");

exports.makeappointment = async (req, res, next) =>{
    try {
        console.log('testttt')
        const {id} = req.user.id
        const { date, petId, time, vetClinicId} = req.body

        const appoinment = await prisma.vetAppointment.findFirst({
            where:{
                vetClinicId : vetClinicId.id,
                petId : petId.id,
                date: date,
                time :  time,
            }
        })
        if(appoinment){
            return res.status(404).json({ error: "Slots has been booked! " });
          }

        const bookAppointment = await prisma.vetAppointment.create({
            data:{
                date: date,
                time: time,
                petId: +petId,
                vetClinicId: +vetClinicId,
            }
        })

        res.json({result: bookAppointment})


    } catch (error) {
        next(error)
        
    }
}

exports.getAppointment = async (req, res, next) =>{
    try {
        const {id} = req.user.id
        const data = await prisma.vetAppointment.findMany({
         where:{
               id,
            },
            select:{
                date: true,
                time: true,
                pet: true,
                vetClinic: true,
                id: true,
            }
        })


        res.json({result: data});
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
    try {
      const appoinmentId = req.params;
      console.log(appoinmentId, "appoinmentId");
  
      const {
        petId,
        vetId,
        date,
        time,
      
      } = req.body;
    
  
      const apointmentExist = await prisma.vetAppointment.findFirst({
        where: {
          id: +appoinmentId.id,
        },
      });
      if(!apointmentExist){
        return res.status(404).json({ error: "Appointment not found" });
      }
  
      const updated = await prisma.vetAppointment.update({
        where: {
            id: +appoinmentId.id,
      },
        data: {
          petId: +petId,
          vetId : vetId,
          date : date,
          time : time,
        },
      });
      res.json({ result: updated});
    } catch (error) {
      next(error);
    }
  };