
import Layout from '../components/layout'
import Scholarship from '../components/scholarship'
import Filters from '../components/filters'
import styles from '../components/layout.module.css'
import { connectToDatabase } from "../utils/mongodb";

// import { connectToDatabase } from "../util/mongodb";


export default function Scholarships({ scholarships }) {
    return (
      <Layout>
      <Filters/>
        <div className={styles.scholarships}>
                    {scholarships.length === 0 ? (
                        <h2>No scholarships found :(</h2>
                    ) : (
                        <ul>
                        {scholarships.map((scholarship,i) => (
                            <Scholarship scholarship={scholarship}/>
                          ))}
                       
                            
                        </ul>
                    )}
                </div>
      </Layout>
    )
  }
  let {category, q } = req.query;
  let query = {};
  if(q) {
    query = {$text: {$search: q}};
  }
  if(category) query.category = category;
  export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const scholarships = await db
      .collection("scholarships")
      .find(query)
      .toArray();
    return {
      props: {
        scholarships: JSON.parse(JSON.stringify(scholarships)),
      },
    };
  }
  
