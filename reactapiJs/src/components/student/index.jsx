import './style.css';
import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:8000/api/students');
        if (res.data.status === 200) {
          setStudents(res.data.students);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();

  }, []);






  const deleteStudent = async (e,id) => {

    // é usado para remover da tela
    const removeDaTela = e.currentTarget;
    removeDaTela.innerText = 'deleting...';

    try {
    const res = await axios.delete(`http://localhost:8000/api/delete-student/${id}`);

    if (res.data.status === 200) {
      // é usado para remover da tela
      removeDaTela.closest("tr").remove();

      swal({
        title: "Deleted",
        text: res.data.message,
        icon: "success",
        button: "Ok",
      })
    }

  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
  }











  var student_HTMLTABLE = '';
  if (loading) {
    student_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
  } else {
    student_HTMLTABLE = students.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.course}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>
          <Link to={`edit-student/${item.id}`} className="btn btn-primary btn-sm">Edit</Link>
        </td>
        <td>
          <button type="button" onClick={(e)=>deleteStudent(e,item.id)} className='btn btn-danger btn-sm'> Delete</button>
        </td>
      </tr>
    ));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Student Data
                <Link to={'http://localhost:5173/add-student'} className="btn btn-primary btn-sm float-end"> Add Student</Link>
              </h4>
            </div>
            <div className="card-body">
              <table className='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {student_HTMLTABLE}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
