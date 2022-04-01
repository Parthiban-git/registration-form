function sub(e) {
  e.preventDefault();
  let form = document.getElementById("registerForm");
  let formData = new FormData(form);
   const name = formData.get("name")
   const email = formData.get("email")
   const password = formData.get("password")
   const number = formData.get("number")
   const department = formData.get("department")
   const skills = formData.get("skills")

   let malecheck=document.getElementById("male").checked;
   let sex = (malecheck==true)?"male":"female"

   let strval=/^[a-zA-Z]+$/
   let numval=/^[0-9]+$/
  //  let regex=/^([a-zA-Z1-15]{1,15})([@]{10})([a-zA-Z]{10})([.]{1})([a-z]{4})/

const value={
    name,email,password,number,sex,department,skills
}
console.log(value);
   
  if(!name.match(strval) || !department.match(strval) || !skills.match(strval) || !number.match(numval)){
       alert("Some input fields missing !");
  }
  else{
       fetch("http://localhost:3001/signup", {
              method: "POST",
              body: JSON.stringify(value),
              headers:{
                  "Content-Type":"application/json",
              }
           })
           .then((res) => {
                if(res.status==200){
                     document.location.href="./home.html"
                }
               else{
                     alert("Email already exists");
            }
      })
      .catch((e)=>{
           alert("error");
      })
  }


  
}
