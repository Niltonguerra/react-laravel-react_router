import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
export const Editstudents = () => {



  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    course: '',
    email: '',
    phone: '',
  });




  
  //pega o id da url
  const {id} = useParams();

  useEffect(() => {
    async function takeData() {
      try{
        const res = await axios.get(`http://localhost:8000/api/edit-student/${id}`)
        if (res.data.status === 200) {
          setFormData(res.data.student);
        }else if(res.data.status === 404){
          swal({
            title: "Error",
            text: res.data.message,
            icon: "error",
            button: "Ok",
          })
  
          navigate('/',{});
  
        }




      }catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
}
takeData();
  },[]);



// o '...formData', mais especificamente os 3 pontinhos são usados para manter os dados já existentes no json, e   
// permitir a atualização de novos dados. 

// o 'e.target.name' referece ao name do input(sendo assim uma chave variavel, que faz a ligação entre o ao useState
// formData e o input);
//já o 'e.target.value' referece ao valor colocado no input
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  const updateStudent = async (e) => {
    // o 'e.preventDefault()' evita que a página seja atualizada antes que o formulario seja enviado 
    e.preventDefault();
    try {
      document.getElementById('update').disabled = true;
      document.getElementById('update').innerText = 'updating...';

      const res = await axios.put(`http://localhost:8000/api/update-student/${id}`, formData);
      
      if (res.data.status === 200) {
        setFormData({
          name: '',
          course: '',
          email: '',
          phone: '',
        });

        swal({
          title: "Uptaded",
          text: res.data.message,
          icon: "success",
          button: "Ok",
        })

        document.getElementById('update').disabled = false;
        document.getElementById('update').innerText = 'update Student';
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };





  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>
                Edit students
                <Link to={'/'} className="btn btn-primary btn-sm float-end">
                  {' '}
                  back
                </Link>
              </h4>
            </div>
            <div className="card-body">

              <form onSubmit={updateStudent}>

                <div className="form-group mb-3">
                  <label>Student Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={formData.name}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Student course</label>
                  <input
                    type="text"
                    name="course"
                    onChange={handleInput}
                    value={formData.course}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Student email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={formData.email}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Student Phone</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleInput}
                    value={formData.phone}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <button type="submit" id='update' className="btn btn-primary">
                    update Student
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
