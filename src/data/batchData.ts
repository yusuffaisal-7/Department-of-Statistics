// Shared data source for batch information
export interface Student {
  id: number;
  rollId: string;
  name: string;
  gender: 'Male' | 'Female';
  email?: string;
  phone?: string;
  bloodGroup?: string;
  homeDistrict?: string;
}

export interface Batch {
  id: number;
  batchNo: number;
  name: string;
  session: string;
  totalStudents: number;
  maleStudents: number;
  femaleStudents: number;
  graduationYear: number;
  advisor: string;
  students: Student[];
}

// Generate random students for each batch
const generateStudents = (batchNo: number, totalStudents: number, maleCount: number): Student[] => {
  const students: Student[] = [];
  const maleNames = [
    'Mohammad', 'Ahmed', 'Rahim', 'Karim', 'Sohel', 'Jahid', 'Rakib', 'Hasan', 'Mehedi', 'Saiful',
    'Arif', 'Masud', 'Imran', 'Nasir', 'Omar', 'Jamal', 'Kamrul', 'Rafiq', 'Shafiq', 'Monir'
  ];
  
  const femaleNames = [
    'Fatima', 'Aisha', 'Nusrat', 'Tahmina', 'Sabina', 'Nasrin', 'Farzana', 'Salma', 'Roksana', 'Sadia',
    'Nadia', 'Rabeya', 'Sharmin', 'Farida', 'Shahana', 'Tania', 'Maliha', 'Sumaiya', 'Ishrat', 'Momena'
  ];
  
  const lastNames = [
    'Islam', 'Ahmed', 'Hossain', 'Rahman', 'Akter', 'Begum', 'Khan', 'Chowdhury', 'Miah', 'Sheikh',
    'Ali', 'Uddin', 'Khatun', 'Jahan', 'Sultana', 'Sarkar', 'Alam', 'Mahmud', 'Haque', 'Siddique'
  ];
  
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const districts = [
    'Noakhali', 'Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur',
    'Comilla', 'Feni', 'Cox\'s Bazar', 'Lakshmipur', 'Chandpur', 'Brahmanbaria', 'Narsingdi',
    'Gazipur', 'Mymensingh', 'Jamalpur', 'Tangail', 'Kishoreganj'
  ];
  
  // Create male students
  for (let i = 0; i < maleCount; i++) {
    const firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const rollNumber = (i + 1).toString().padStart(2, '0');
    
    students.push({
      id: i + 1,
      rollId: `NSTU-STAT-${batchNo}-${rollNumber}`,
      name: `${firstName} ${lastName}`,
      gender: 'Male',
      email: `${firstName.toLowerCase()}.${batchNo}@student.nstu.edu.bd`,
      phone: `+88018${Math.floor(10000000 + Math.random() * 90000000)}`,
      bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      homeDistrict: districts[Math.floor(Math.random() * districts.length)]
    });
  }
  
  // Create female students
  for (let i = 0; i < (totalStudents - maleCount); i++) {
    const firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const rollNumber = (i + maleCount + 1).toString().padStart(2, '0');
    
    students.push({
      id: i + maleCount + 1,
      rollId: `NSTU-STAT-${batchNo}-${rollNumber}`,
      name: `${firstName} ${lastName}`,
      gender: 'Female',
      email: `${firstName.toLowerCase()}.${batchNo}@student.nstu.edu.bd`,
      phone: `+88017${Math.floor(10000000 + Math.random() * 90000000)}`,
      bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      homeDistrict: districts[Math.floor(Math.random() * districts.length)]
    });
  }
  
  // Sort by roll ID
  return students.sort((a, b) => a.rollId.localeCompare(b.rollId));
};

// Single source of truth for all batch data
const batchData: Batch[] = [
  { 
    id: 1, 
    batchNo: 1, 
    name: "1st Batch", 
    session: "2016-2017", 
    totalStudents: 50, 
    maleStudents: 30, 
    femaleStudents: 20, 
    graduationYear: 2020, 
    advisor: "Md Shohel Rana",
    students: generateStudents(1, 50, 30)
  },
  { 
    id: 2, 
    batchNo: 2, 
    name: "2nd Batch", 
    session: "2017-2018", 
    totalStudents: 55, 
    maleStudents: 32, 
    femaleStudents: 23, 
    graduationYear: 2021, 
    advisor: "Najma Begum",
    students: generateStudents(2, 55, 32)
  },
  { 
    id: 3, 
    batchNo: 3, 
    name: "3rd Batch", 
    session: "2018-2019", 
    totalStudents: 60, 
    maleStudents: 35, 
    femaleStudents: 25, 
    graduationYear: 2022, 
    advisor: "Mimma Tabassum",
    students: generateStudents(3, 60, 35)
  },
  { 
    id: 4, 
    batchNo: 4, 
    name: "4th Batch", 
    session: "2019-2020", 
    totalStudents: 58, 
    maleStudents: 33, 
    femaleStudents: 25, 
    graduationYear: 2023, 
    advisor: "Md. Mamun Miah",
    students: generateStudents(4, 58, 33)
  },
  { 
    id: 5, 
    batchNo: 5, 
    name: "5th Batch", 
    session: "2020-2021", 
    totalStudents: 62, 
    maleStudents: 36, 
    femaleStudents: 26, 
    graduationYear: 2024, 
    advisor: "Mohammad Omar Faruk",
    students: generateStudents(5, 62, 36)
  },
  { 
    id: 6, 
    batchNo: 6, 
    name: "6th Batch", 
    session: "2021-2022", 
    totalStudents: 65, 
    maleStudents: 38, 
    femaleStudents: 27, 
    graduationYear: 2025, 
    advisor: "Md. Iftakhar Parvej",
    students: generateStudents(6, 65, 38)
  },
  { 
    id: 7, 
    batchNo: 7, 
    name: "7th Batch", 
    session: "2022-2023", 
    totalStudents: 63, 
    maleStudents: 36, 
    femaleStudents: 27, 
    graduationYear: 2026, 
    advisor: "Md. Rasel Hossain",
    students: generateStudents(7, 63, 36)
  },
  { 
    id: 8, 
    batchNo: 8, 
    name: "8th Batch", 
    session: "2023-2024", 
    totalStudents: 68, 
    maleStudents: 40, 
    femaleStudents: 28, 
    graduationYear: 2027, 
    advisor: "Tahmina Akter",
    students: generateStudents(8, 68, 40)
  },
  { 
    id: 9, 
    batchNo: 9, 
    name: "9th Batch", 
    session: "2024-2025", 
    totalStudents: 70, 
    maleStudents: 41, 
    femaleStudents: 29, 
    graduationYear: 2028, 
    advisor: "Shohel Mahmud",
    students: generateStudents(9, 70, 41)
  }
];

export default batchData;

// Helper function to get all batches
export const getAllBatches = (): Batch[] => {
  return batchData;
};

// Helper function to get a batch by ID
export const getBatchById = (id: number): Batch | null => {
  return batchData.find(batch => batch.id === id) || null;
};

// Helper function to get a batch by batch number
export const getBatchByNumber = (batchNo: number): Batch | null => {
  return batchData.find(batch => batch.batchNo === batchNo) || null;
};