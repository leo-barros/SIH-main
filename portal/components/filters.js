import Image from 'next/image'
import styles from './/layout.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

 export default function Form() {
    const search = async event => {
      event.preventDefault()

 
      
            const title=event.target.title.value
            const description=event.target.description.value
            const category=event.target.Category.value
            const educationLevel=event.target.EducationLevel.value
            const areaofStudy=event.target.Areaofstudy.value
            const type=event.target.TypeofScholarship.value
            const location=event.target.Locationofstudy.value
            const funding=event.target.Scholarshipfunding.value
            const deadline=event.target.deadline.value
        
}


  return (
    <div className={styles.filterContainer}>
        <h1>Filters to search:</h1>
        <p>
            Search for scholarships based on the various filters shown below.
            Tick the relevant boxes that apply to you. Note: These filters are highly selective

            </p>
    
    <div className={styles.filter}>
    <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Category"
          label="Category"
        >
          <MenuItem value={"Scholarships for Women"}>Scholarships for Women</MenuItem>
          <MenuItem value={"SC"}>SC</MenuItem>
          <MenuItem value={"ST"}>ST</MenuItem>
          <MenuItem value={"OBC"}>OBC</MenuItem>
          <MenuItem value={"Genral"}>Genral</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
    </div>
    <div className={styles.filter}>
        <InputLabel id="demo-simple-select-label">Education Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="EducationLevel"
          label="Education Level"
        >
          <MenuItem value={"Metric"}>Metric</MenuItem>
          <MenuItem value={"Diploma"}>Diploma</MenuItem>
          <MenuItem value={"Undergraduate"}>Undergraduate</MenuItem>
          <MenuItem value={"Masters"}>Masters</MenuItem>
          <MenuItem value={"PhD"}>PhD</MenuItem>
          <MenuItem value={"PostDoc"}>PostDoc</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        </div>
        <div className={styles.filter}>
        <InputLabel id="demo-simple-select-label">Area of study</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Areaofstudy"
          label="Area of study"
        >
          <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
          <MenuItem value={"Psychology"}>Psychology</MenuItem>
          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
          <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        </div>
        <div className={styles.filter}>
        <InputLabel id="demo-simple-select-label">Type of Scholarship</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="TypeofScholarship"
          label="Type of Scholarship"
        >
          <MenuItem value={"Merit-Based"}>Merit-Based</MenuItem>
          <MenuItem value={"Means-Based"}>Means-Based</MenuItem>
          <MenuItem value={"Fellowships"}>Fellowships</MenuItem>
          <MenuItem value={"Zero interest loans"}>Zero interest loans</MenuItem>
          <MenuItem value={"Fully funded scholarships"}>Fully funded scholarships</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        </div>
        <div className={styles.filter}>
        <InputLabel id="demo-simple-select-label">Location of study</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Locationofstudy"
          label="Location of study"
        >
          <MenuItem value={"Within India"}>Within India</MenuItem>
          <MenuItem value={"Abroad"}>Abroad</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        </div>
        <div className={styles.filter}>
        <InputLabel id="demo-simple-select-label">Scholarship funding</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Scholarshipfunding"
          label="Scholarship funding"
        >
          <MenuItem value={"Government"}>Government</MenuItem>
          <MenuItem value={"Private"}>Private</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        </div>
        
    <Link href={`/search?category=${category}&educationLevel=${educationLevel}&areaofStudy=${areaofStudy}&type=${type}&location=${location}&funding=${funding}`}>
    <button>View Scholarships 🔎</button>
        </Link> 
 
</div>
  )
}
