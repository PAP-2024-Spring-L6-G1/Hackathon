export default function Signup() {

  return (
    <div className="Signup text-gray-200 flex justify-center">
      <form className='mt-6'>
      <h1 className="text-3xl text-white block text-center mb-6">Sign Up</h1>
        <label className='block mb-6'>Please enter your information below to register as a new user:</label>
        <label>Username:
          <input className='text-black block' type="text" />
        </label>
        <label>Password:
          <input className='text-black block' type="password" />
        </label>
        <button className='mt-6 lg:inline-block py-2 px-6 lg:mr-3 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold rounded-xl transition duration-200'>Sign Up</button>
      </form>
    </div>
  );
}