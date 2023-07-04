import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="" onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input type="text" name="" id="" required />

        <label htmlFor="">Email</label>
        <input type="email" name="" id="" required />

        <label htmlFor="">Password</label>
        <input type="password" name="" id="" required />

        <label htmlFor="">Confirm Password</label>
        <input type="password" name="" id="" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
