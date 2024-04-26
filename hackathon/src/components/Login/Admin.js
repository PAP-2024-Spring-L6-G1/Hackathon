export default function Admin() {

  return (
    <div className="Admin text-gray-200 flex justify-center">
      <form className='mt-6'>
      <h1 className="text-3xl text-white block text-center mb-6">⚠️ Administrator Panel ⚠️</h1>
        <label className='block mb-6'>Please use caution when changing items below:</label>
        <label>New countdown deadline datetime:
          <input className='text-black block' type="datetime-local" />
        </label><br></br>
        <label>Allow submissions:
          <input className='text-black' type="checkbox" />
        </label><br></br>
        <button className='mt-6 lg:inline-block py-2 px-6 lg:mr-3 bg-red-500 hover:bg-red-800 text-sm text-white font-semibold rounded-xl transition duration-200'>Submit</button>
      </form>
    </div>
  );
}