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
      <h1 className="text-center text-4xl">Mentorlista</h1>

      <div className="flex flex-wrap -m-4 mt-8">
        {mentors.map((mentor) => (
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img
                className="rounded-full"
                width="60"
                height="60"
                src={mentor.avatar}
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                {mentor.name}
              </h2>
              <p className="leading-relaxed text-base">{mentor.description}</p>
              <p className="text-base mt-2">{mentor.teaches}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
