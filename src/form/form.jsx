// import Valid from './valid'
function form (){
    const valid = (event)=> {
        console.log("prevented")
        event.preventDefault()
        var fname = new Object
        fname.Organisation = document.getElementById('fname').value
        fname.Name  = document.getElementById('ApplicantName').value
        fname.Email = document.getElementById('Email').value
        fname.PhNo = document.getElementById('num').value
        console.log(fname)
    }
    return(
<div>
<p>this is from form</p>
<form>
<label htmlFor="fname">Organisation Name :</label>
  <input type="text" id="fname" name="fname" /><br />
  <label htmlFor="Name">Applicant Name  :</label>
  <input type="text" id="ApplicantName" name="Name" /><br />
  <label htmlFor="Email">Email :</label>
  <input type="Email" id="Email" name="Email" /><br />
  <label htmlFor="num">Phone Number :</label>
  <input type="text" id="num" name="num" /><br />
    <button onClick={valid} id="sub">submit</button>
</form>
</div>
    );
}

export default form 