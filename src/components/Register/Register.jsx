import { useContext, useState } from 'react'
import FieldInput from '../../components/FieldInput/FieldInput';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { API } from '../../utils/config';
function Register() {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      id: 1,
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      name: 'firstName',
      required: true,
      pattern: "[a-zA-Z]{2,}",
      error: 'First Name shouldn`t contain any numbers and special characters!'
    },
    {
      id: 2,
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name',
      name: 'lastName',
      required: true,
      pattern: "[a-zA-Z]{2,}",
      error: 'Last Name also shouldn`t contain any numbers and special characters!'
    },
    {
      id: 3,
      label: 'Phone',
      type: 'number',
      placeholder: 'Phone',
      name: 'phone',
      required: true,
      pattern: '^\d{9}$',
      error: 'Enter a phone number consisting of 9 digits!',
    },
    {
      id: 4,
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      name: 'email',
      required: true,
      error: 'it should be a valid email address!'
    },
    {
      id: 5,
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      required: true,
      error: 'Password should contain at least 3 characters, at least 1 uppercase, 1 lowercase!'
    },
    {
      id: 6,
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password',
      name: 'confirmPassword',
      required: true,
      pattern: values.password,
      error: 'Password don`t match!'
    }
  ]
         
  const onChange = (evt) => {  
    setValues({...values, [evt.target.name]: evt.target.value });
  }

  const navigate = useNavigate()

  const {setAuth} = useContext(AuthContext)
  

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    API.post('user/register', {
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phone,
      email: values.email,
      password: values.password
    })
    .then((res)=> {
        localStorage.setItem('token', res.data.token)
        navigate('/')
        setAuth(true)
        
    }
    ).catch((err)=> console.log(err));
    
}

  return (
<div className="flex h-screen">

          <div className="w-1/2 bg-[#f0d5c9] flex items-center justify-center">
            <div className="relative">

              <img
                src="./Frame2.svg" 
                alt="Register Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
    
          <div className="w-1/2 flex items-center justify-center bg-white">
            <div className="w-full max-w-sm p-8 bg-white">
              <h2 className="text-2xl font-bold mb-4 text-left text-[36px] font-[900]">Sign up</h2>
              <p className="mb-6 text-gray-600 text-[13px] text-start">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline text-[13px]">
                  Sign in
                </Link>
              </p>
              <form className='space-y-4' action="#" onSubmit={handleSubmit}>
     {
      inputs.map((input) => (
        <FieldInput key={input.id} {...input} onChange={onChange} value={values[input.name]} 
        className="w-full px-4 py-2 border border-gray-300 rounded-[10px] outline-none focus:ring-2 focus:ring-indigo-500" />
      ))
     }
     <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-[#152540] rounded-[99px] hover:bg-indigo-700"
                >
                  Next step
                </button>
     </form>
            </div>
          </div>
</div>
  )
}

export default Register
