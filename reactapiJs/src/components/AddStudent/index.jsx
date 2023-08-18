import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
export const Addstudent = () => {



  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    course: '',
    email: '',
    phone: '',
  });

  const[error_list, setErrorList] = useState({
    name: '',
    course: '',
    email: '',
    phone: '',
  });



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




  const saveStudent = async (e) => {
    e.preventDefault();
    try {
      document.getElementById('save').disabled = true;
      document.getElementById('save').innerText = 'Saving...';

      const res = await axios.post('http://localhost:8000/api/add-student', formData);

      if (res.data.status === 200) { 
        swal({
          title: "Success",
          text: res.data.message,
          icon: "success",
          button: "Ok",
        })

        setFormData({
          name: '',
          course: '',
          email: '',
          phone: '',
        });

        document.getElementById('save').disabled = false;
        document.getElementById('save').innerText = 'Add Student';


        navigate('/',{});






      }else{
        setErrorList(res.data.validate_err)
        document.getElementById('save').disabled = false;
        document.getElementById('save').innerText = 'Add Student';
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
                Add students
                <Link to={'/'} className="btn btn-primary btn-sm float-end">
                  {' '}
                  back
                </Link>
              </h4>
            </div>
            <div className="card-body">

              <form onSubmit={saveStudent}>
                <div className="form-group mb-3">
                  <label>Student Name</label>
                  <input 
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={formData.name}
                    className="form-control"
                  />

                  <span className='text-danger'>{error_list.name}</span>

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
                  
                  <span className='text-danger'>{error_list.course}</span>

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

                  
                  <span className='text-danger'>{error_list.email}</span>

                
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

                  
                  <span className='text-danger'>{error_list.phone}</span>

                </div>

                <div className="form-group mb-3">
                  <button type="submit" id='save' className="btn btn-primary">
                    Add Student
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
