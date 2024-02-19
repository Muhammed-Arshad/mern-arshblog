import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

function SignIn() {

  const [formData, setFormData] = useState({});
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value});
    
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();

    if(!formData.email || !formData.password){
      return setErrMsg('Please fill out all fields!')
    }

    try {
      setLoading(true);
      setErrMsg(null);
      const res = await fetch('/api/auth/signin',{
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
        navigate('/')
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
              <Label value = 'Your email'/>
              <TextInput type = 'email' placeholder = 'Email' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value = 'Your password'/>
              <TextInput type = 'password' placeholder = '*******' id='password' onChange={handleChange}/>
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
            <span>Don't have an account?</span>
            <Link to='/sign-up' className="text-blue-500">Sign Up</Link>
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

export default SignIn;
