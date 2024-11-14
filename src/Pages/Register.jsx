import { useContext } from "react";
import { Link } from "react-router-dom"




const Register = () => {
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        //get form data
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, photo, email, password)
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name, photo, email, password});
        

    }
  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center text-2xl font-semibold">Register your account</h2>
  <form onSubmit={handleSubmit} className="card-body">
    {/* name input */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
    </div>
    {/* phot url */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photo" placeholder="Enter your Photo url" className="input input-bordered" required />
    </div>
    {/* email input */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    {/* password input */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-neutral rounded-none">Register</button>
    </div>
  </form>
  <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-600" to="/auth/login">Login</Link></p>
</div>
  
</div>
  )
}

export default Register
