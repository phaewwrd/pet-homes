const { vetClinic } = require("../configs/prisma")

exports.getVetsInfo = async (req, res, next) => {
    try {
        const vetClinicInfo = await vetClinic.findMany({

            select: {
                id: true,
                name: true,
                address: true,
                phone: true,
                type: true,
                location: true,
                province: true,
                
            }
        })
        res.status(200).json(vetClinicInfo)
    } catch (error) {
        next(error)
    }
}

exports.searchVets = async (req, res, next) => {
    try {
      const { name, province, type } = req.query; // ดึงข้อมูลจาก query string
  
      const vetClinicInfo = await vetClinic.findMany({
        where: {
          AND: [
            name ? { name: { contains: name } } : {}, // กรองตามชื่อ
            province ? { province: { contains: province } } : {}, // กรองตามจังหวัด
            type ? { type: { contains: type } } : {}, // กรองตามประเภท
          ]
        },
        select: {
          id: true,
          name: true,
          address: true,
          phone: true,
          type: true,
          location: true,
          province: true
        }
      });
  
      res.json(vetClinicInfo);
      console.log(vetClinicInfo);
    } catch (error) {
      next(error);
    }
  };
  

// exports.searchVets = async (req, res, next) => {
//     try {
//       const { name, province, type } = req.query;
  
//       // เก็บเงื่อนไขไว้ใน array
//       const conditions = [];
  
//       if (name) {
//         conditions.push({
//           name: { contains: name.trim(), mode: "insensitive" }, 
//         });
//       }
  
//       if (province) {
//         conditions.push({
//           province: { contains: province.trim(), mode: "insensitive" },
//         });
//       }
  
//       if (type) {
//         conditions.push({
//           type: { contains: type.trim(), mode: "insensitive" },
//         });
//       }
  
//       const vetClinicInfo = await vetClinic.findMany({
//         where: conditions.length > 0 ? { AND: conditions } : {},
//         select: {
//           id: true,
//           name: true,
//           address: true,
//           phone: true,
//           type: true,
//           location: true,
//           province: true,
//         },
//       });
  
//       res.json(vetClinicInfo);
//     } catch (error) {
//       next(error);
//     }
//   };
  