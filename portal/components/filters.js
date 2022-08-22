import Image from 'next/image'
import styles from './/layout.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'



function Filters() {
  return (
    <div className={styles.filterContainer}>
        <h1>Filters to search:</h1>
        <p>
            Search for scholarships based on the various filters shown below.
            Tick the relevant boxes that apply to you. Note: These filters are highly selective

        </p>
    
    <div className={styles.filters}>
    
        <ul id='category'>
            <h3>Category</h3>
            <li>
                <input onChange={this.handleChange} type="checkbox" id="women"  name="women" value="Scholarships for Women"/>
                <label for="women">Scholarships for Women</label>
            </li>
            <li>
                <input onChange={this.handleChange} type="checkbox" id="sc" name="sc" value="SC"/>
                <label for="sc">SC</label>
            </li>
            <li>
                <input onChange={this.handleChange} type="checkbox" id="st" name="st" value="ST"/>
                <label for="st">ST</label>
            </li>
            <li>
                <input onChange={this.handleChange} type="checkbox" id="obc" name="obc" value="OBC"/>
                <label for="obc">OBC</label>
            </li>
            <li>
                <input onChange={this.handleChange} type="checkbox" id="general" name="general" value="General"/>
                <label for="general">General</label>
            </li>
            <li>
                <input onChange={this.handleChange} type="checkbox" id="ns" name="ns" value="Not specified"/>
                <label for="ns">Not specified</label>
            </li>
        </ul>
        <ul id='educationLevel'>
            <h3>Education Level</h3>
            <li>
                <input onChange={this.handleChange1} type="checkbox" id="metric" name="metric" value="Metric"/>
                <label for="metric">Metric</label>
            </li>
            <li>
                <input onChange={this.handleChange1} type="checkbox" id="diploma" name="diploma" value="Diploma"/>
                <label for="diploma">Diploma</label>
            </li>
            <li>
                <input onChange={this.handleChange1} type="checkbox" id="ungergrad" name="ungergrad" value="Undergraduate"/>
                <label for="ungergrad">Undergraduate</label>
            </li>
            <li>
                <input onChange={this.handleChange1} type="checkbox" id="masters" name="masters" value="Masters"/>
                <label for="masters">Masters</label>
            </li>
            <li>
                <input onChange={this.handleChange1} type="checkbox" id="phd" name="phd" value="PhD"/>
                <label for="phd">PhD</label>
            </li>
            <li>
                <input onChange={this.handleChange1} type="checkbox" id="postdoc" name="postdoc" value="PostDoc"/>
                <label for="postdoc">PostDoc</label>
            </li>
            <li>
                <input onChange={this.handleChange1} type="checkbox"  id="ns" name="ns" value="Not specified"/>
                <label for="ns">Not specified</label>
            </li>
        </ul>
        <ul id='areaofStudy'>
            <h3>Area of study</h3>
            <li>
                <input onChange={this.handleChange2} type="checkbox" id="cs" name="cs" value="Computer Science" />
                <label for="cs">Computer Science</label>
            </li>
            <li>
                <input onChange={this.handleChange2} type="checkbox" id="physics" name="physics" value="Physics"/>
                <label for="physics">Physics</label>
            </li>
            <li>
                <input onChange={this.handleChange2} type="checkbox" id="psychology" name="psychology" value="Psychology"/>
                <label for="psychology">Psychology</label>
            </li>
            <li>
                <input onChange={this.handleChange2} type="checkbox" id="chem" name="chem" value="Chemistry"/>
                <label for="chem">Chemistry</label>
            </li>
            <li>
                <input onChange={this.handleChange2} type="checkbox" id="me" name="me" value="Mechanical Engineering" />
                <label for="me">Mechanical Engineering</label>
            </li>
            <li>
                <input onChange={this.handleChange2} type="checkbox" id="ns" name="ns" value="Not specified"/>
                <label for="ns">Not specified</label>
            </li>
        </ul>
        <ul id='type'>
            <h3>Type of Scholarship</h3>
            <li>
                <input onChange={this.handleChange3} type="checkbox" id="meritbased" name="meritbased" value="Merit-Based"/>
                <label for="meritbased">Merit-Based </label>
            </li>
            <li>
                <input onChange={this.handleChange3} type="checkbox" id="meansbased" name="meansbased" value="Means-Based"/>
                <label for="meansbased">Means-Based </label>
            </li>
            <li>
                <input onChange={this.handleChange3} type="checkbox" id="fellowship" name="fellowship" value="Fellowships"/>
                <label for="fellowship">Fellowships</label>
            </li>
            <li>
                <input onChange={this.handleChange3} type="checkbox" id="zerointerestloan" name="zerointerestloan" value="Zero interest loans"/>
                <label for="zerointerestloan">Zero interest loans</label>
            </li>
            <li>
                <input onChange={this.handleChange3} type="checkbox" id="fullyfunded" name="fullyfunded" value="Fully funded scholarships"/>
                <label for="fullyfunded">Fully funded scholarships</label>
            </li>
            <li>
                <input onChange={this.handleChange3} type="checkbox" id="ns" name="ns" value="Not specified"/>
                <label for="ns">Not specified</label>
            </li>
        </ul>
        <ul id='location'>
            <h3>Location of study</h3>
            <li>
                <input onChange={this.handleChange4} type="checkbox" id="withinindia" name="withinindia" value="Within India"/>
                <label for="withinindia">Within India </label>
            </li>
            <li>
                <input onChange={this.handleChange4} type="checkbox" id="abroad" name="abroad" value="Abroad"/>
                <label for="abroad">Abroad </label>
            </li>
       
            <li>
                <input onChange={this.handleChange4} type="checkbox" id="ns" name="ns" value="Not specified"/>
                <label for="ns">Not specified</label>
            </li>
        </ul>
        <ul id='funding'>
            <h3>Scholarship funding</h3>
            <li>
                <input onChange={this.handleChange5} type="checkbox" id="government" name="government" value="Government"/>
                <label for="government">Government</label>
            </li>

            <li>
                <input onChange={this.handleChange5} type="checkbox" id="private" name="private" value="Private" />
                <label for="private">Private </label>
            </li>
       
            <li>
                <input onChange={this.handleChange5} type="checkbox" id="ns" name="ns" value="Not specified"/>
                <label for="ns">Not specified</label>
            </li>
        </ul>        
    </div>
    <Link href={`/search?category=${category}&educationLevel=${educationLevel}&areaofStudy=${areaofStudy}&type=${type}&location=${location}&funding=${funding}`}>
    <button>View Scholarships 🔎</button>
        </Link>
    
</div>
  )

}

export default Filters
// const [userinfo, setUserInfo] = useState({
//     languages: [],
//     response: [],
//   });
  
//   const handleChange = (e) => {
//     // Destructuring
//     const { value, checked } = e.target;
//     const { location } = userinfo;
     
//     // Case 1 : The user checks the box
//     if (checked) {
//       setUserInfo({
//         location: [...languages, value],
//         response: [...languages, value],
//       });
//     }
  
//     // Case 2  : The user unchecks the box
//     else {
//       setUserInfo({
//         location: languages.filter((e) => e !== value),
//         response: languages.filter((e) => e !== value),
//       });
//     }
//   };

// handleChange = (e) => {
//     // to find out if it's checked or not; returns true or false
    
//     const checked = e.target.checked;
    
//     // to get the checked value
//     const checkedValue = e.target.value;
    
//     // to get the checked name
//     const checkedName = e.target.name;
    
//     //then you can do with the value all you want to do with it.

// const category=document.getElementById("category").childNodes.querySelector('input[type=checkbox]').forEach(cb => {
//   if (cb.checked) {
//     searchParams.append('category', cb.value)
//   }
// });
// const educationLevel=document.getElementById("educationLevel").childNodes.querySelector('input[type=checkbox]').forEach(cb => {
//     if (cb.checked) {
//       searchParams.append('educationLevel', cb.value)
//     }
//   });
//   const areaofStudy=document.getElementById("areaofStudy").childNodes.querySelector('input[type=checkbox]').forEach(cb => {
//     if (cb.checked) {
//       searchParams.append('areaofStudy', cb.value)
//     }
//   });
//   const type=document.getElementById("type").childNodes.querySelector('input[type=checkbox]').forEach(cb => {
//     if (cb.checked) {
//       searchParams.append('type', cb.value)
//     }
//   });
//   const location=document.getElementById("location").childNodes.querySelector('input[type=checkbox]').forEach(cb => {
//     if (cb.checked) {
//       searchParams.append('location', cb.value)
//     }
//   });
//   const funding=document.getElementById("funding").childNodes.querySelector('input[type=checkbox]').forEach(cb => {
//     if (cb.checked) {
//       searchParams.append('funding', cb.value)
//     }
//   });