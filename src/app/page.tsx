//1 Import area`
//import { NamedImport }  from 'somelibrary'
  import { PrismaClient } from '@prisma/client'
import Swal from 'sweetalert2';
//const classObject = new ClassName();
  const prisma = new PrismaClient()


//2 Defination area
function Home() {
  //We can use server actions inside the server component's function defination
  async function anil(formData: FormData){ //Old Style Classical Way It has to defined with camleCase
    'use server'
    console.log('Hello >>> ',formData);
    const firstname = formData.get('firstname');
    console.log('fn >>>',firstname);

                    // prisma.model.method()
    try {
      const student = await prisma.students_tbl.create({
        data: {
          firstname:""+firstname,// Assuming you are sure that firstname won't be null
        },
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

      
    } catch (error) {
      console.log(error);
    }

    //1. We can call API
    //OR
    //2. We can use prisma to directly insert int he table
  }
  let sunil = async ()=>{ //New Style = FatArrow Function

  }

  // Every function return something
  return (
    <>
      <h1>Student Admission Form</h1>
      <form method="GET" action={anil}>
        <input type="text" name="firstname"/>
        <button type="submit">Add Student</button>
      </form>
    </>
  )

}

//3. Export Area
//3.1 Default export
export default Home;

//3.2 Named Export