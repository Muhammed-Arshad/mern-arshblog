import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

function SignUp() {

  const [formData, setFormData] = useState({});
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value});
    
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();

    if(!formData.username || !formData.email || !formData.password){
      return setErrMsg('Please fill out all fields!')
    }

    try {
      setLoading(true);
      setErrMsg(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if(data.success === false){
        setLoading(false);
        return setErrMsg(data.message);
      }
      setLoading(false);

      if(res.ok){
        navigate('/sign-in')
      }

    } catch (error) {
      setLoading(false);
      setErrMsg(error.message);
    }
  }

console.log(formData);

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r
                 from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
            >
              Arsh
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value = 'Your username'/>
              <TextInput type = 'text' placeholder = 'Username' id='username' onChange={handleChange}/>
            </div>
            <div>
              <Label value = 'Your email'/>
              <TextInput type = 'email' placeholder = 'Email' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value = 'Your password'/>
              <TextInput type = 'password' placeholder = 'Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {
                loading ?(
                  <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading...</span>
                  </>
                ):'Sign up'
              }
              </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">Sign In</Link>
          </div>
          {
            errMsg && (
              <Alert className="mt-5" color='failure'>
                {errMsg}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default SignUp;
