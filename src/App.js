import React, { useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

console.log(data); 

function App() {
  const [jobs, setJobs] = useState([]);

useEffect(() => setJobs(data), []);

  return (
    <div class="App">
      <header class="bg-teal-500 mb-12">
        <img src="/images/headerimg.svg" alt="bg" />
      </header>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoardComponent job={job} key=
        {job.id} />)
      )}
    </div>
  );
}

export default App;
