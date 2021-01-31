import { getAllMentors } from '../lib/mentors';

export async function getStaticProps() {
  const mentors = getAllMentors();

  return {
    props: {
      mentors,
    },
  };
}

export default function Index({ mentors }) {
  return (
    <>

      <div class="max-w-screen-sm mx-auto my-8 md:my-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sans">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
            Utvecklare till utvecklare.
          </span>
        </h1>
        <p class="text-center text-md sm:text-lg md:text-xl text-gray-500 font-light">Erfarna utvecklare som gärna delar med sig av sina erfarenheter, sin kunskap & ger rådgivning till andra utvecklare som vill växa.</p>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {mentors.map((mentor, i) => (
          <div key={i} className="bg-white shadow-xl p-6 rounded-lg flex flex-col flex-nowrap items-stretch">
            <img
              className="rounded-full mx-auto mb-3 -mt-1"
              width="80"
              height="80"
              src={mentor.avatar}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              {mentor.name}
            </h2>
            <p className="leading-relaxed text-base font-light">{mentor.description}</p>
            <ul class="flex flex-grow flex-wrap content-end">
              {mentor.teaches.map((teach, i) => (
                <li class="px-2 py-1 mr-2 mt-2 text-xs leading-none text-gray-800 bg-purple-100 rounded-full">{teach}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
