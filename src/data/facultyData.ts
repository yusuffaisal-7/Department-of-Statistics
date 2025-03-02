import mimmaimage from '../images/Mimma.jpeg';
import iftekharimage from '../images/Iftekhar.jpg';
import sohelmahmudimage from '../images/Shohelmahmud.jpg';
import ranaimage from '../images/shohelrana.jpg';
import omarimage from '../images/omar.jpg';
import mamunimage from '../images/Mamun.jpg';
import nazmaimage from '../images/Najma.jpeg';
import sorifimage from '../images/Sorif.jpg';
import tahminaimage from '../images/Tahmina.jpg';
import blankimage from '../images/blank.png';

// Shared data source for faculty information

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi?: string;
  url?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  education?: string[];
  email?: string;
  phone?: string;
  bloodGroup?: string;
  joiningDate?: string;
  researchInterests?: string[];
  publications?: Publication[];
}

// Single source of truth for all faculty data
const facultyData: Record<string, FacultyMember> = {
  'md-shohel-rana': {
    id: 'md-shohel-rana',
    name: 'Md Shohel Rana',
    designation: 'Associate Professor',
    image: ranaimage,
    education: [
      'PhD (Ongoing)',
      'M.Sc (University of Chittagong)',
      'B.Sc (University of Chittagong)'
    ],
    email: 'shohel.stat@nstu.edu.bd',
    phone: '+8801818735018',
    bloodGroup: 'O+',
    joiningDate: '2015-12-27',
    researchInterests: [
      'Statistical Modeling',
      'Time Series Analysis',
      'Probability Distribution',
      'Econometrics',
      'Biostatistics'
    ],
    publications: [
      {
        id: 'rana-2022-1',
        title: 'Ageing and Health Status of Older People in Bangladesh',
        journal: 'Biomedical Statistics and Informatics (Volume 5, Issue 2)',
        year: 2020,
        authors: 'Md. Shohel Rana, Najma Begum,Shankar Barai,Sabbir Hussain Shanta,Md. Alauddin Rasel,Salma Akter Tania, Farhana Afsar',
        doi: '10.11648/j.bsi.20200502.11',
        url: 'https://www.sciencepublishinggroup.com/article/10.11648/j.bsi.20200502.11'
      },
      {
        id: 'rana-2021-1',
        title: 'MEASURING CO-MOVEMENT OF REAL INTEREST RATE AND INFLATION RATE: USING VEC APPROACH',
        journal: 'International Journal of Engineering Technologies and Management Research 7(6):66-76',
        year: 2020,
        authors: 'Md. Rasel Hossain, Ahsanul Haque, Md. Abdullah Amir Hamja, Md. Shohel Rana',
        doi: '0.29121/ijetmr.v7.i6.2020.687',
        url: 'https://www.researchgate.net/publication/342204209_MEASURING_CO-MOVEMENT_OF_REAL_INTEREST_RATE_AND_INFLATION_RATE_USING_VEC_APPROACH'
      },
      {
        id: 'rana-2020-1',
        title: 'Probability Distribution Analysis of Rainfall Data in Coastal Areas of Bangladesh',
        journal: 'Environmental Statistics Journal',
        year: 2020,
        authors: 'Rana MS, Miah MM',
        doi: '10.1234/esj.2020.012',
        url: 'https://example.com/paper3'
      }
    ]
  },
  'najma-begum': {
    id: 'najma-begum',
    name: 'Najma Begum',
    designation: 'Assistant Professor',
    image: nazmaimage,
    education: [
      'PhD - (Jahangirnagar University)',
      'M.Sc (Jahangirnagar University)',
      'B.Sc (Jahanirnagar University)'
    ],
    email: 'najma.stat@nstu.edu.bd',
    phone: '+8801721072339',
    bloodGroup: 'AB+',
    joiningDate: '2015-12-27',
    researchInterests: [
      "Statistical Inference", "Demography", "Biostatistics", "Modeling"
    ],
    publications: [
      {
        id: 'begum-2023-1',
        title: 'Survival Analysis of Cancer Patients in Rural Bangladesh',
        journal: 'Asian Journal of Medical Statistics',
        year: 2023,
        authors: 'Begum N, Rana MS, Akter T',
        doi: '10.1234/ajms.2023.002',
        url: 'https://example.com/paper4'
      },

    ]
  },
  'mimma-tabassum': {
    id: 'mimma-tabassum',
    name: 'Mimma Tabassum',
    designation: 'Assistant Professor',
    image: mimmaimage,
    education: [
      'M.Sc (Jahangirnagar University)',
      'B.Sc (Jahangirnagar University)',
    ],
    email: 'mimma.stat@nstu.edu.bd',
    phone: '+8801716383125',
    bloodGroup: 'O+',
    joiningDate: '2017-04-23',
    researchInterests: [
      "Regression Analysis", "Biostatistics", "Public Health", "General Statistics", "Estimation: Preliminary Test Approach to Shrinkage Estimator"
    ],
    publications: [
      {
        id: 'tabassum-2023-1',
        title: 'Machine Learning Approaches for Predicting Student Performance',
        journal: 'Educational Data Mining Journal',
        year: 2023,
        authors: 'Tabassum M, Mahmud S, Parvej MI',
        doi: '10.1234/edmj.2023.004',
        url: 'https://example.com/paper6'
      },
      {
        id: 'tabassum-2022-1',
        title: 'Clustering Algorithms for Big Data: A Comparative Analysis',
        journal: 'Journal of Big Data Analytics',
        year: 2022,
        authors: 'Tabassum M, Hossain MR',
        doi: '10.1234/jbda.2022.015',
        url: 'https://example.com/paper7'
      },
      {
        id: 'tabassum-2021-1',
        title: 'Pattern Recognition in Agricultural Data: A Case Study in Bangladesh',
        journal: 'Agricultural Statistics Journal',
        year: 2021,
        authors: 'Tabassum M, Rana MS, Begum N',
        doi: '10.1234/asj.2021.009',
        url: 'https://example.com/paper8'
      }
    ]
  },
  'md-mamun-miah': {
    id: 'md-mamun-miah',
    name: 'Md. Mamun Miah',
    designation: 'Assistant Professor',
    image: mamunimage,
    education: [
      'M.Sc (Jahangirnagar University)',
      'B.Sc (Jahangirnagar University)'
    ],
    email: 'mamunmiah.615@gmail.com',
    phone: '+8801798039406',
    bloodGroup: 'B+',
    joiningDate: '2017-11-20',
    researchInterests: [
      "Econometric Modelling with Time Series", "Biostatistics", "Probability Distribution and Statistical Inference"
    ],
    publications: [
      {
        id: 'miah-2023-1',
        title: 'Quality Control Methods in Manufacturing Industries of Bangladesh',
        journal: 'Industrial Statistics Journal',
        year: 2023,
        authors: 'Miah MM, Faruk MO',
        doi: '10.1234/isj.2023.007',
        url: 'https://example.com/paper9'
      },
      {
        id: 'miah-2022-1',
        title: 'Experimental Design for Optimizing Agricultural Yield',
        journal: 'Journal of Agricultural Research',
        year: 2022,
        authors: 'Miah MM, Rana MS, Yeasmin M',
        doi: '10.1234/jar.2022.011',
        url: 'https://example.com/paper10'
      }
    ]
  },
  'mohammad-omar-faruk': {
    id: 'mohammad-omar-faruk',
    name: 'Mohammad Omar Faruk',
    designation: 'Assistant Professor',
    image: omarimage,
    education: [
      'PhD (Ongoing) ',
      'MS (University of Chittagong)',
      'BSc (University of Chittagong)'
    ],
    email: 'omarfaruk.stat@nstu.edu.bd',
    phone: '+8801676879060',
    bloodGroup: 'A+',
    joiningDate: '2017-11-20',
    researchInterests: [
      "Biostatistics", "Demography", "Epidemiology", "Public Health", "Impact of Environmental Factors on Human Disease", "Renewable Energy Extraction Strategy from Biomass and Animal Residue through Statistical Approach", "Data Science", "Machine Learning"
    ],
    publications: [
      {
        id:  'faruk-2023-1',
        title: 'Forecasting Stock Market Trends Using ARIMA Models',
        journal: 'Financial Statistics Review',
        year: 2023,
        authors: 'Faruk MO, Parvej MI',
        doi: '10.1234/fsr.2023.003',
        url: 'https://example.com/paper11'
      },
      {
        id: 'faruk-2022-1',
        title: 'Time Series Analysis of Climate Data in Bangladesh',
        journal: 'Environmental Statistics Journal',
        year: 2022,
        authors: 'Faruk MO, Rana MS, Hossain S',
        doi: '10.1234/esj.2022.014',
        url: 'https://example.com/paper12'
      }
    ]
  },
  'md-iftakhar-parvej': {
    id: 'md-iftakhar-parvej',
    name: 'Md. Iftakhar Parvej',
    designation: 'Assistant Professor',
    image: iftekharimage,
    education: [
      'M.Sc (Jahangirnagar University)',
      'BSc (Jahangirnagar University)'
    ],
    email: 'iftakhar.stat@nstu.edu.bd',
    phone: '+8801719157546',
    bloodGroup: 'B+',
    joiningDate: '2018-02-03',
    researchInterests: [
      "Demography", "Multivariate Analysis", "Statistical Inference", "Public Health"
    ],
    publications: [
      {
        id: 'parvej-2023-1',
        title: 'Bayesian Approaches to Small Area Estimation',
        journal: 'Journal of Statistical Computation',
        year: 2023,
        authors: 'Parvej MI, Mahmud S',
        doi: '10.1234/jsc.2023.006',
        url: 'https://example.com/paper13'
      },
      {
        id: 'parvej-2022-1',
        title: 'Statistical Learning Methods for Classification Problems',
        journal: 'Machine Learning and Statistics',
        year: 2022,
        authors: 'Parvej MI, Tabassum M, Faruk MO',
        doi: '10.1234/mls.2022.009',
        url: 'https://example.com/paper14'
      }
    ]
  },
  'md-rasel-hossain': {
    id: 'md-rasel-hossain',
    name: 'Md. Rasel Hossain',
    designation: 'Assistant Professor',
    image: blankimage,
    education: [
      'M.Sc (Islamic University, Kushtia)',
      'BSc (Islamic University, Kushtia)'
    ],
    email: 'rasel.stat@nstu.edu.bd',
    phone: '+8801750720209',
    bloodGroup: 'A+',
    joiningDate: '2018-08-10',
    researchInterests: [
      'Multivariate Analysis',
      'Statistical Genetics',
      'Bioinformatics',
      
    ],
    publications: [
      {
        id: 'hossain-2023-1',
        title: 'Multivariate Analysis of Genetic Data in Bangladesh',
        journal: 'Genetic Statistics Journal',
        year: 2023,
        authors: 'Hossain MR, Akter T',
        doi: '10.1234/gsj.2023.008',
        url: 'https://example.com/paper15'
      },
      {
        id: 'hossain-2022-1',
        title: 'Statistical Methods in Bioinformatics: Current Trends',
        journal: 'Bioinformatics and Statistics',
        year: 2022,
        authors: 'Hossain MR, Tabassum M, Yeasmin M',
        doi: '10.1234/bas.2022.013',
        url: 'https://example.com/paper16'
      }
    ]
  },
  'tahmina-akter': {
    id: 'tahmina-akter',
    name: 'Tahmina Akter',
    designation: 'Lecturer',
    image: tahminaimage,
    education: [
      'MS (University of Chittagong)',
      'BSc (University of Chittagong)'
    ],
    email: 'tahminapapri.stat@nstu.edu.bd',
    phone: '+8801748392200',
    bloodGroup: 'O+',
    joiningDate: '2022-01-24',
    researchInterests: [
      'Biostatistics',
      'Public Health Statistics',
      'Epidemiology',
      'Clinical Data Analysis',
      
    ],
    publications: [
      {
        id: 'akter-2023-1',
        title: 'Statistical Analysis of Public Health Data in Rural Bangladesh',
        journal: 'Public Health Statistics',
        year: 2023,
        authors: 'Akter T, Begum N',
        doi: '10.1234/phs.2023.005',
        url: 'https://example.com/paper17'
      },
      {
        id: 'akter-2022-1',
        title: 'Epidemiological Models for Disease Prediction',
        journal: 'Epidemiology Journal',
        year: 2022,
        authors: 'Akter T, Rana MS, Hossain MR',
        doi: '10.1234/ej.2022.010',
        url: 'https://example.com/paper18'
      }
    ]
  },
  'shohel-mahmud': {
    id: 'shohel-mahmud',
    name: 'Shohel Mahmud',
    designation: 'Lecturer',
    image: sohelmahmudimage,
    education: [
      'MS (Jahangirnagar University)',
      'BSc (Jahangirnagar University)'
    ],
    email: 'smahmud.stat@nstu.edu.bd',
    phone: '+8801933020140',
    bloodGroup: 'O+',
    joiningDate: '2019-07-20',
    researchInterests: [
      'Probability Distribution', 
      'Hypothesis Testing',
       'Design of Experiment', 
      'Time Series Analysis'
      , 'Epidemiology'
      , 'Biostatistics', 
      'Survival Analysis', 
      'Data Mining'
    ],
    publications: [
      {
        id: 'mahmud-2023-1',
        title: 'Deep Learning Approaches for Time Series Forecasting',
        journal: 'Journal of Machine Learning and Applications',
        year: 2023,
        authors: 'Mahmud S, Parvej MI, Tabassum M',
        doi: '10.1234/jmla.2023.007',
        url: 'https://example.com/paper19'
      },
      {
        id: 'mahmud-2022-1',
        title: 'Statistical Computing Methods for Big Data Analysis',
        journal: 'Computational Statistics Journal',
        year: 2022,
        authors: 'Mahmud S, Hossain S',
        doi: '10.1234/csj.2022.012',
        url: 'https://example.com/paper20'
      }
    ]
  },
  'sorif-hossain': {
    id: 'sorif-hossain',
    name: 'Sorif Hossain',
    designation: 'Lecturer',
    image: sorifimage,
    education: [
      'MSc (Thesis) (Institute of Statistical Research and Training, University of Dhaka.)',
      'B.Sc (Institute of Statistical Research and Training, University of Dhaka.)'
    ],
    email: 'sorif.stat@nstu.edu.bd',
    phone: '+880123456789',
    bloodGroup: 'B+',
    joiningDate: '2022-01-24',
    researchInterests: [
      "Public Health", "Epidemiology", "Statistics", "Biostatistics", "Health Economics", "Environmental Health", "Artificial Intelligence"
    ],
    publications: [
      {
        id: 'hossain-s-2023-1',
        title: 'Sampling Techniques for Social Surveys in Bangladesh',
        journal: 'Survey Methodology Journal',
        year: 2023,
        authors: 'Hossain S, Faruk MO',
        doi: '10.1234/smj.2023.009',
        url: 'https://example.com/paper21'
      },
      {
        id: 'hossain-s-2022-1',
        title: 'Demographic Analysis of Population Census Data',
        journal: 'Demographic Statistics',
        year: 2022,
        authors: 'Hossain S, Rana MS, Yeasmin M',
        doi: '10.1234/ds.2022.016',
        url: 'https://example.com/paper22'
      }
    ]
  },
  'monira-yeasmin': {
    id: 'monira-yeasmin',
    name: 'Monira Yeasmin',
    designation: 'Lecturer',
    image: blankimage,
    education: [
      'MS (University of Rajshahi)',
      'BSc (University of Rajshahi)'
    ],
    email: 'monira.stat@nstu.edu.bd',
    phone: '+880123456789',
    bloodGroup: 'A+',
    joiningDate: '2022-01-24',
    researchInterests: [
     
    ],
    publications: [
      {
        id: 'yeasmin-2023-1',
        title: 'Statistical Quality Control in Manufacturing Industries',
        journal: 'Quality Control and Statistics',
        year: 2023,
        authors: 'Yeasmin M, Miah MM',
        doi: '10.1234/qcs.2023.011',
        url: 'https://example.com/paper23'
      },
      {
        id: 'yeasmin-2022-1',
        title: 'Reliability Analysis of Industrial Systems',
        journal: 'Reliability Engineering Journal',
        year: 2022,
        authors: 'Yeasmin M, Hossain MR, Hossain S',
        doi: '10.1234/rej.2022.018',
        url: 'https://example.com/paper24'
      }
    ]
  }
};

export default facultyData;

// Helper function to get all faculty members
export const getAllFacultyMembers = (): FacultyMember[] => {
  return Object.values(facultyData);
};

// Helper function to get a faculty member by ID
export const getFacultyMemberById = (id: string): FacultyMember | null => {
  return facultyData[id] || null;
};