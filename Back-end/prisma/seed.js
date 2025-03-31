const { text } = require("express");
const prisma = require("../configs/prisma");
const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("123456", 10);

const vetClinic = [
        {
            id: 1,
          doctor_name: "Dr. John Doe",
          name: "Happy Paws Vet",
          email: "john.doe@example.com",
          password: hashedPassword, 
          location: "13.7563,100.5018",
          address: "123 Main Street, Bangkok",
          phone: "081-234-5678",
          picture: "https://example.com/john.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 2,
          doctor_name: "Dr. Jane Smith",
          name: "Pet Care Clinic",
          email: "jane.smith@example.com",
          password: hashedPassword, 
          location: "13.7415,100.5582",
          address: "456 Sukhumvit Road, Bangkok",
          phone: "082-345-6789",
          picture: "https://example.com/jane.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 3,
          doctor_name: "Dr. Emily Johnson",
          name: "Vet Wellness Center",
          email: "emily.johnson@example.com",
          password: hashedPassword, 
          location: "14.0208,100.5255",
          address: "789 Ratchadaphisek, Nonthaburi",
          phone: "083-456-7890",
          picture: "https://example.com/emily.jpg",
          province: "Nonthaburi",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 4,
          doctor_name: "Dr. Michael Brown",
          name: "Animal Health Hospital",
          email: "michael.brown@example.com",
          password: hashedPassword, 
          location: "13.8500,100.5600",
          address: "567 Silom, Bangkok",
          phone: "084-567-8901",
          picture: "https://example.com/michael.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 5,
          doctor_name: "Dr. Sarah Wilson",
          name: "Smart Pet Clinic",
          email: "sarah.wilson@example.com",
          password: hashedPassword, 
          location: "13.7000,100.7500",
          address: "101 Ladprao, Bangkok",
          phone: "085-678-9012",
          picture: "https://example.com/sarah.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 6,
          doctor_name: "Dr. David Lee",
          name: "Friendly Vet Hospital",
          email: "david.lee@example.com",
          password: "$2b$10$XXXXXXXXXXXXXXXXXXXXXX",
          location: "13.8200,100.5100",
          address: "111 Chaeng Watthana, Bangkok",
          phone: "086-789-0123",
          picture: "https://example.com/david.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 7,
          doctor_name: "Dr. Anna Davis",
          name: "Purrfect Care Vet",
          email: "anna.davis@example.com",
          password: hashedPassword, 
          location: "13.7800,100.5200",
          address: "222 Phaya Thai, Bangkok",
          phone: "087-890-1234",
          picture: "https://example.com/anna.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 8,
          doctor_name: "Dr. Robert Martinez",
          name: "Healthy Pet Clinic",
          email: "robert.martinez@example.com",
          password: hashedPassword, 
          location: "13.7300,100.5100",
          address: "333 Ramintra, Bangkok",
          phone: "088-901-2345",
          picture: "https://example.com/robert.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 9,
          doctor_name: "Dr. Lisa White",
          name: "PetFirst Veterinary",
          email: "lisa.white@example.com",
          password: hashedPassword, 
          location: "13.7000,100.5300",
          address: "444 On Nut, Bangkok",
          phone: "089-012-3456",
          picture: "https://example.com/lisa.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        },
        {
            id: 10,
          doctor_name: "Dr. Mark Taylor",
          name: "Four Paws Clinic",
          email: "mark.taylor@example.com",
          password: "$2b$10$XXXXXXXXXXXXXXXXXXXXXX",
          location: "13.7500,100.5000",
          address: "555 Bang Na, Bangkok",
          phone: "090-123-4567",
          picture: "https://example.com/mark.jpg",
          province: "Bangkok",
          type: "NORMAL",
          role: "VETS"
        }
     
      
      
]
 
const User =[
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: hashedPassword, 
        tel: "081-234-5678",
        role: "USER",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: hashedPassword, 
        tel: "082-345-6789",
        role: "USER",
      }
]

const pet = [
    {
      id: 1,
      name: "Buddy",
      chronicDisease: "None",
      medicine: "None",
      vaccined: "Rabies, Distemper",
      age: "3 years",
      breed: "Golden Retriever",
      type: "NORMAL",
      gender: "MALE",
      userId: 1
    },
    {
      id: 2,
      name: "Milo",
      chronicDisease: "Diabetes",
      medicine: "Insulin",
      vaccined: "Rabies, Parvo",
      age: "5 years",
      breed: "Poodle",
      type: "NORMAL",
      gender: "MALE",
      userId: 1
    },
    {
      id: 3,
      name: "Luna",
      chronicDisease: "None",
      medicine: "None",
      vaccined: "Rabies, Distemper, Leptospirosis",
      age: "2 years",
      breed: "Siberian Husky",
      type: "NORMAL",
      gender: "FEMALE",
      userId: 2
    },
    {
      id: 4,
      name: "Charlie",
      chronicDisease: "Heart disease",
      medicine: "Beta-blockers",
      vaccined: "Rabies, Parvo, Distemper",
      age: "7 years",
      breed: "Beagle",
      type: "NORMAL",
      gender: "MALE",
      userId: 2
    },
    {
      id: 5,
      name: "Max",
      chronicDisease: "None",
      medicine: "None",
      vaccined: "Rabies, Parvo",
      age: "4 years",
      breed: "Bulldog",
      type: "NORMAL",
      gender: "MALE",
      userId: 1
    },
    {
      id: 6,
      name: "Bella",
      chronicDisease: "Arthritis",
      medicine: "Painkillers",
      vaccined: "Rabies, Lyme disease",
      age: "6 years",
      breed: "Labrador Retriever",
      type: "NORMAL",
      gender: "FEMALE",
      userId: 1
    },
    {
      id: 7,
      name: "Coco",
      chronicDisease: "None",
      medicine: "None",
      vaccined: "Rabies, Parvo, Distemper",
      age: "1 year",
      breed: "Shih Tzu",
      type: "NORMAL",
      gender: "FEMALE",
      userId: 1
    },
    {
      id: 8,
      name: "Rocky",
      chronicDisease: "None",
      medicine: "None",
      vaccined: "Rabies, Distemper",
      age: "2 years",
      breed: "Rottweiler",
      type: "NORMAL",
      gender: "MALE",
      userId: 2
    },
    {
      id: 9,
      name: "Daisy",
      chronicDisease: "Allergies",
      medicine: "Antihistamines",
      vaccined: "Rabies, Leptospirosis",
      age: "3 years",
      breed: "Cocker Spaniel",
      type: "NORMAL",
      gender: "FEMALE",
      userId: 2
    },
    {
      id: 10,
      name: "Shadow",
      chronicDisease: "Epilepsy",
      medicine: "Anti-seizure medication",
      vaccined: "Rabies, Parvo",
      age: "8 years",
      breed: "German Shepherd",
      type: "NORMAL",
      gender: "MALE",
      userId: 2
    }
  ];

const vetAppointment = [
    {
      id: 1,
      date: "2025-04-01",
      time: "10:00 AM",
      petId: 1,
      vetClinicId: 1,
      bookingStatus: "PENDING"
    },
    {
      id: 2,
      date: "2025-04-02",
      time: "11:30 AM",
      petId: 2,
      vetClinicId: 2,
      bookingStatus: "CONFIRMED"
    },
    {
      id: 3,
      date: "2025-04-03",
      time: "02:00 PM",
      petId: 3,
      vetClinicId: 3,
      bookingStatus: "CANCELLED"
    },
    {
      id: 4,
      date: "2025-04-04",
      time: "03:45 PM",
      petId: 4,
      vetClinicId: 1,
      bookingStatus: "PENDING"
    },
    {
      id: 5,
      date: "2025-04-05",
      time: "09:00 AM",
      petId: 5,
      vetClinicId: 2,
      bookingStatus: "CONFIRMED"
    },
    {
      id: 6,
      date: "2025-04-06",
      time: "01:30 PM",
      petId: 6,
      vetClinicId: 3,
      bookingStatus: "CANCELLED"
    },
    {
      id: 7,
      date: "2025-04-07",
      time: "04:15 PM",
      petId: 7,
      vetClinicId: 1,
      bookingStatus: "CONFIRMED"
    },
    {
      id: 8,
      date: "2025-04-08",
      time: "10:45 AM",
      petId: 8,
      vetClinicId: 2,
      bookingStatus: "PENDING"
    },
    {
      id: 9,
      date: "2025-04-09",
      time: "12:00 PM",
      petId: 9,
      vetClinicId: 3,
      bookingStatus: "CONFIRMED"
    },
    {
      id: 10,
      date: "2025-04-10",
      time: "03:00 PM",
      petId: 10,
      vetClinicId: 1,
      bookingStatus: "CANCELLED"
    }
];
  
  

async function seedDB() {
    try {
      // 1. Seed independent tables first (no foreign key dependencies)
      await prisma.vetClinic.createMany({
        data: vetClinic,
        // skipDuplicates: true,
      });
      console.log("vetClinic seeded successfully");


      await prisma.user.createMany({
        data: User,
      });
      console.log("Users seeded successfully");
  
      await prisma.pet.createMany({
        data: pet,
        // skipDuplicates: true,
      });
      console.log("User seeded successfully");
  
  
      // 3. Seed tables that depend on User
      await prisma.vetAppointment.createMany({
        data: vetAppointment,
        // skipDuplicates: true,
      });
      console.log("vetAppointment  seeded successfully");

    } catch (error) {
      console.error("Error during seeding:", error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  seedDB();

  