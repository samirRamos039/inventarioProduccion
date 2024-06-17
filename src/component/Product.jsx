import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Show_Alert } from '../function'

export function Product() {
  const url = 'http://localhost:8080/producto'
  const [products,setProducts]= useState([]);
  const [id,setId]= useState('');
  const [name,setName]= useState('');
  const [width,setWidth]= useState('');
  const [length,setLength]= useState('');
  const [description,setDescription]= useState('');
  const [operation,setOperation]= useState(1);
  const [title,setTitle]= useState('');

     useEffect(()=> {
       getProduct();
     },[])

     const getProduct = async ()=> {
       const respuesta = await axios.get(url);
       setProducts(respuesta.data);
     }
  return (
    <div className='App'>
      <div className='container-fluid'>
      <div className='row mt-3'>
          <div className='col-md-4 offset-md-4'>
            <div className='d-grid mx-auto'>
              <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                <i className='fa-solid fa-circle-plus'></i> ADD
              </button>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
            <div className='table-responsive'>
              <div className='table table-bordered'>
                <thead>
                  <tr>
                    <th>#</th><th>name</th><th>width</th><th>length</th><th>description</th><th></th></tr>
                </thead>
                <tbody className='table-group-divider'></tbody>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='modal-fade'>
        
      </div>
    </div>
  )
}
