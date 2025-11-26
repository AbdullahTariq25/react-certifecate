import express from 'express';
 

const  app = express();

app.get('/api/certifecates' , (req,res) => {
const certificates = [
  {
    id: 1,
    favorate: true,
    title: "Graduation Certificate (毕业证书)",
    issuer: "Shenzhen Institute of Information Technology",
    program: "Software Technology (3-year diploma)",
    period: "September 2022 – June 2025",
    issuedDate: "2025-06-25",
    certificateNo: "129579202506000010",
    authority: "Guangdong Provincial Department of Education",
    valueTier: "High-Value",
    category: "Academic"
  },
  {
    id: 2,
    favorate: true,
    title: "Quiz Competition – 1st Place (Seerat-un-Nabi)",
    issuer: "Government College of Technology, Lahore (TEVTA)",
    event: "SEERAT-UN-NABI Quiz",
    position: "1st Place",
    issuedDate: null,
    valueTier: "Supporting Value",
    category: "Academic / Islamic Studies"
  },
  {
    id: 3,
    favorate: false,
    title: "Cultural Engagement Award",
    issuer: "School of International Exchange and Cooperation, SIIT",
    description: "Active involvement in cultural activities and cross-cultural engagement",
    issuedDate: "2025-06-16",
    valueTier: "Supporting Value",
    category: "Soft Skills"
  },
  {
    id: 4,
    favorate: false,
    title: "Sports Award – Badminton Tournament",
    issuer: "School of Computer and Software, SIIT",
    event: "Youth in Motion, Racket in Battle",
    award: "Excellent Award (优秀奖)",
    issuedDate: "2025-05",
    valueTier: "Supporting Value",
    category: "Extracurricular"
  },
  {
    id: 5,
    favorate:false,
    title: "Chinese Language – Quiz Participation Prize",
    issuer: "School of Software Engineering & Computer Science, SIIT",
    event: "Chinese Corner Quiz Points Challenge",
    issuedDate: "2025-04-17",
    valueTier: "Medium-Value",
    category: "Language / Cultural"
  },
  {
    id: 6,
    favorate: true,
    title: "Leadership – 'Belt and Road' Conference Representative",
    issuer: "School of International Exchange and Cooperation, SIIT",
    role: "International Student Representative",
    event: "2025 Belt and Road Vocational Education Conference",
    issuedDate: "2025-06-16",
    valueTier: "Supporting Value",
    category: "Leadership"
  },
  {
    id: 7,
    favorate: true,
    title: "Summer Camp Completion (Front-end Dev + Islamic Studies)",
    issuer: "Tanzeel Islamic Center, Lahore",
    modules: ["Quranic Wisdom", "Seerah", "Ibaadah", "Front-end Development (HTML, CSS, JS)", "Health & Fitness"],
    certificateNo: "TIC-49",
    issuedDate: "2024-07-26",
    collaborators: ["MslmDev", "JFreaks Software Solutions"],
    valueTier: "Medium-Value",
    category: "Technical + Personal Development"
  },
  {
    id: 8,
    favorate: false,
    title: "Python & Turtle Graphics Course",
    issuer: "TANG International (under 'Chinese + Vocational Skills')",
    program: "Overview of Python, Basic Syntax, Turtle Graphics",
    discipline: "Engineering Science",
    certificateNo: "PAKTSC-0000035",
    issuedDate: "2023-06",
    valueTier: "Medium-Value",
    category: "Programming"
  },
  {
    id: 9,
    favorate: false,
    title: "Matriculation Certificate (Secondary School)",
    issuer: "Board of Intermediate & Secondary Education, Lahore",
    school: "Unique High School for Boys, Bahria Town, Lahore",
    marks: "743 / 1100",
    grade: "B",
    resultDate: "2022-08-31",
    valueTier: "High-Value",
    category: "Academic"
  },
  {
    id: 10,
    favorate: false,
    title: "No Criminal Record Certificate",
    issuer: "Shenzhen Public Security Bureau",
    passportNo: "NW1070971",
    period: "2024-11-08 to 2025-06-24",
    issuedDate: "2025-06-25",
    validity: "3 months",
    valueTier: "Administrative Value",
    category: "Legal / Compliance"
  },
  {
    id: 11,
    favorate: true,
    title: "AI Trainer (Data Annotation) – Vocational Training",
    issuer: "China Pakistan TVET - Industrial Center of Excellence (CPTICE)",
    program: "Artificial Intelligence Trainer (Data Annotation)",
    duration: "10 Days (June 9–20, 2025)",
    method: "On-site Education",
    issuedDate: "2025-06-20",
    valueTier: "High-Value",
    category: "Artificial Intelligence"
  },
  {
    id: 12,
    favorate: false,
    title: "Quranic Arabic Course",
    issuer: "Tanzeel Islamic Center, Lahore",
    duration: "May 8 – June 16, 2023",
    certificateNo: "LQ-0472",
    issuedDate: "2023-06-17",
    valueTier: "Supporting Value",
    category: "Religious / Personal"
  },
  {
    id: 13,
    favorate: false,
    title: "Political Membership (PML-N)",
    issuer: "Pakistan Muslim League (N)",
    membershipNo: "396",
    year: "2023",
    valueTier: "Personal / Miscellaneous",
    category: "Political"
  },
  {
    id: 14,
    favorate: false,
    title: "Islamic Belief System Program",
    issuer: "Masjid Imam Bukhari",
    duration: "12-day program",
    instructor: "Hakeem Mubasher Ali Hassan",
    valueTier: "Supporting Value",
    category: "Religious / Ethics"
  },
  {
    id: 15,
    favorate: false,
    title: "English-Medium Instruction Certificate",
    issuer: "Shenzhen Institute of Information Technology, School of Computing and Software",
    class: "2022",
    courses: "15 professional courses (e.g., Android, Java Web)",
    teacher: "Li Qin",
    issuedDate: "2025-04-25",
    valueTier: "Medium-Value",
    category: "Academic / Language"
  },
  {
    id: 16,
    favorate: true,
    title: "Pre-Graduation Certificate (Sino-Pak Dual Diploma)",
    issuer: "Shenzhen Institute of Information Technology & Govt. College of Technology, Lahore",
    program: "Sino-Pakistan CCTE Dual Diploma '2+1' – Software Technology",
    period: "Sep 2022 – Jul 2025",
    certificateNo: "Y12957201000024",
    issuedDate: "2025-04-17",
    valueTier: "High-Value",
    category: "Academic / International"
  },
  {
    id: 17,
    favorate: false,
    title: "Character Certificate (Matric)",
    issuer: "Unique Group of Institutions, Lahore",
    board: "BISE Lahore",
    rollNo: "230575",
    conduct: "Satisfactory",
    issuedDate: "2022-09-08",
    valueTier: "Supporting Value",
    category: "Academic / Conduct"
  },
  // Skipping #18 (duplicate of #15)
  {
    id: 19,
    favorate: false,
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP Foundation (HP LIFE)",
    topics: ["Common threats", "Basic data protection"],
    issuedDate: "2025-07-21",
    valueTier: "Medium-Value",
    category: "Cybersecurity"
  },
  {
    id: 20,
    favorate: false,
    title: "Agile Project Management",
    issuer: "HP Foundation (HP LIFE)",
    topics: ["MVP", "Scrum vs Kanban", "Agile workflows"],
    serialNo: "929ed010-f2bc-4280-9f88-25b745651f5c",
    issuedDate: "2025-07-23",
    valueTier: "High-Value",
    category: "Project Management"
  },
  {
    id: 21,
    favorate: false,
    title: "Data Science & Analytics",
    issuer: "HP Foundation (HP LIFE)",
    topics: ["Data-driven practices", "Tools", "Career skills"],
    issuedDate: "2025-07-21",
    valueTier: "High-Value",
    category: "Data Science"
  },
  {
    id: 22,
    favorate: false,
    title: "AI for Beginners",
    issuer: "HP Foundation (HP LIFE)",
    topics: ["AI concepts", "Data role", "Business use", "Ethics"],
    issuedDate: "2025-07-21",
    valueTier: "High-Value",
    category: "Artificial Intelligence"
  },
  {
    id: 23,
    favorate: false,
    title: "Introduction to Machine Learning",
    issuer: "HP Foundation (HP LIFE)",
    topics: ["Machine learning basics", "Applications", "Ethical considerations"],
    issuedDate: "2025-07-21",
    valueTier: "High-Value",
    category: "Machine Learning"
  },
  {
    id: 24,
    favorate: false,
    title: "Introduction to CISSP",
    issuer: "Simplilearn (SkillUP)",
    platform: "Simplilearn",
    certificateCode: "9134792",
    issuedDate: "2025-10",
    signatory: "Krishna Kumar (CEO)",
    valueTier: "Highest-Value",
    category: "Cybersecurity"
  }
]

if(req.query.search){
    const filterCertifecates = certificates.filter(certificate => 
certificate.title.includes(req.query.search))

    res.send(filterCertifecates)
    return

}
setTimeout(()=> {
res.send(certificates)
}, );

})

const port = process.env.PORT || 3000;
app.listen(port ,() => { 
    console.log(` salam bahi on port ${port}`);
});