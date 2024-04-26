export default function Login() {

  return (
    <div className="Login text-gray-200 flex justify-center">
      <form className='mt-6'>
      <h1 className="text-3xl text-white block text-center mb-6">Log In</h1>
        <label className='block mb-6'>Please enter your information below to login to your existing account:</label>
        <label>Username:
          <input className='text-black block' type="text" />
        </label>
        <label>Password:
          <input className='text-black block' type="password" />
        </label>
        <button className='mt-6 bg-gray-50 rounded-xl text-blacklg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded-xl transition duration-200'>Login</button>
      </form>
    </div>
  );
}