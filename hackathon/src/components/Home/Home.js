import './Home.css';

export default function Home() {

  return (
    <div className="Home">
      {/* <p className='text-white'>Home Page Goes Here</p> */}
      <h1 className='font-mono text-white text-4xl py-8'>Computing For All's Spring 2024 Hackathon</h1>
      <img className='header-image' src={"./hackathon.jpg"} />

      <h1 className='font-mono text-white text-4xl py-8'>Description and Theme</h1>
      <p className='text-white text-l py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo interdum magna, a suscipit nisi fermentum nec. Sed aliquam eu dolor iaculis tristique. Suspendisse gravida odio id risus euismod tempus. Vestibulum pretium risus in ullamcorper mattis. Aenean luctus mauris quis odio ornare fringilla. Ut imperdiet vitae arcu eu convallis. Aliquam id massa convallis, sagittis ante non, cursus ante. Quisque risus odio, aliquam eu condimentum nec, iaculis sed augue.</p>
      <p className='text-white text-l py-4'>Morbi ultricies urna ut erat venenatis, vitae lobortis mi cursus. Aliquam sed nulla et dui tempor consectetur. Nam ullamcorper euismod volutpat. Nulla sit amet magna suscipit, gravida quam et, finibus erat. Nam congue erat augue, nec feugiat magna interdum eget. Integer id elit vitae diam pharetra pretium semper ut ligula. Morbi blandit scelerisque cursus. Phasellus tellus lacus, iaculis a massa nec, fringilla gravida dui. Cras vestibulum condimentum dolor. Sed facilisis odio tortor, a molestie mi suscipit non. Donec id elit ut lorem dapibus rutrum. Vivamus tempor imperdiet risus eget convallis. In imperdiet fringilla diam.</p>

      <h1 className='font-mono text-white text-4xl py-8'>Rules and Deadlines</h1>
      <p className='text-white text-l py-4'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet sapien maximus massa finibus aliquam. Sed ac lorem a sapien mattis finibus quis eget purus. Sed et ex vel ipsum consectetur tempus. Donec lacinia nibh et metus vulputate dapibus. Mauris euismod odio diam, eget egestas urna posuere sed. Morbi non euismod magna. Cras sit amet ex efficitur erat interdum suscipit. Quisque urna massa, porta nec sollicitudin ac, lacinia ac leo. Sed imperdiet placerat libero et commodo. Sed eget risus ut purus ullamcorper commodo. Nullam in feugiat est. Donec maximus pulvinar massa, id finibus odio vehicula ut. Donec vel ornare diam, quis commodo ipsum.</p>
      <p className='text-white text-l py-4'>Donec pellentesque turpis est, eget bibendum turpis hendrerit nec. Donec ut libero in nibh laoreet sagittis at at tortor. Integer cursus, nulla sit amet mattis fermentum, mi lorem semper ligula, vel hendrerit augue mauris in nunc. Fusce sodales tristique ipsum quis tempus. In sed facilisis diam, interdum condimentum est. In vulputate ornare nisi sed elementum. Suspendisse potenti. Nam rutrum vulputate ipsum non tempus. Suspendisse tempor, quam nec laoreet molestie, ex mauris laoreet massa, sit amet fermentum ligula eros in massa. Maecenas orci purus, iaculis eget neque sed, lobortis faucibus dui. Aenean id pellentesque erat, a congue leo.</p>

      <a className="lg:inline-block py-2 px-6 lg:mr-3 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold rounded-xl transition duration-200" href="/Hackathon/#/signup">Create an Account and Join a Team!</a>
    </div>
  );
}