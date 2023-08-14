import './App.css';
import studentsData from './studentsData.json'

const getMaxMarks = () => {
  var maxMarks = 0
  studentsData.data.forEach(dataItem => {
    if (maxMarks<dataItem["Marks"]) {
      maxMarks = dataItem["Marks"]
    }
  });
  return maxMarks
}

const alertMarks = () =>{
  const maxMarks = getMaxMarks()
  alert(`Max marks are:- ${maxMarks}`)
}

function App() {
  return (
    <div className="App">
      <div className='container'>
        <button className='btn' onClick={alertMarks}>
          Get Max Marks
        </button>
        <div className='table'>
          <div className='ColHeadings'>
              <div className='rowItem'>
                <span><h3>Rollno</h3></span>
                <span><h3>Name</h3></span>
                <span><h3>Subject</h3></span>
                <span><h3>Marks</h3></span>
              </div>
          </div>
          {
            studentsData.data.map((dataItem,key)=>{
              return (
                <>
                    <div className='row'>
                      <div className='rowItem'>
                        <span>{dataItem['Roll No']}</span>
                      </div>
                      <div className='rowItem'>
                        <span>{dataItem['Name']}</span>
                      </div>
                      <div className='rowItem'>
                        <span>{dataItem['Subject']}</span>
                      </div>
                      <div className='rowItem'>
                        <span>{dataItem['Marks']}</span>
                      </div>
                    </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;















// Steps to complete the test successfully
// Center the search bar and style the button according to input bar.
// Integrate a JSON file into the search bar so that search results can be dynamically populated.
// Write code to populate data below the search bar based on a search of ID name.
// Test your code thoroughly to ensure that it works as expected.
// Submit your completed test for grading.
// Note: Be sure to follow best practices for coding, including properly commenting your code and organizing it in a way that is easy to read  and understand.