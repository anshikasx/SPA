export default function Results() {

  let total = 0;
  for(let i=0;i<90000000;i++){
    total += i;
  }

  return (
    <div className="card">
      <h3>Semester Results</h3>
      <p>CGPA: 8.7</p>
    </div>
  );
}