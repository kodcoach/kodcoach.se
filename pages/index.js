import { useState } from 'react';
import Head from '../components/Head';
import Select from '../components/Select';
import { getAllMentors } from '../lib/mentors';
import { flatten } from '../lib/utils';

export async function getStaticProps() {
  const mentors = getAllMentors();

  return {
    props: {
      mentors,
    },
  };
}

export default function PageIndex({ mentors }) {
  const [query, setQuery] = useState({ skill: '', search: '' });

  let sortedMentors = mentors;

  if (query.skill) {
    sortedMentors = sortedMentors.filter(
      (mentor) =>
        !!mentor.skills.find((t) => t.toLowerCase().indexOf(query.skill) !== -1)
    );
  }

  if (query.search) {
    sortedMentors = sortedMentors.filter(
      (mentor) =>
        mentor.name.toLowerCase().indexOf(query.search) !== -1 ||
        mentor.description.toLowerCase().indexOf(query.search) !== -1 ||
        !!mentor.skills.find(
          (t) => t.toLowerCase().indexOf(query.search) !== -1
        )
    );
  }

  const skills = Array.from(
    new Set(flatten(mentors.map((m) => m.skills)))
  ).map((t) => ({ value: t.toLowerCase(), label: t }));

  return (
    <>
      <Head title="Kodcoach" url="https://kodcoach.se/" />

      <div className="max-w-screen-sm mx-auto my-8 md:my-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold font-mono  tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
            Utvecklare till utvecklare.
          </span>
        </h1>
        <p className="text-center text-lg sm:text-xl font-sans font-light">
          Erfarna utvecklare som gärna delar med sig av sina erfarenheter, sin
          kunskap & ger rådgivning till andra utvecklare som vill växa.
        </p>
      </div>

      <div className="w-full max-w-screen-sm mx-auto mb-8 md:mb-12 font-mono">
        <div className="flex flex-wrap justify-between space-y-4 sm:space-x-4 sm:space-y-0">
          <div className="w-full lg:w-1/2 flex-none sm:flex-1">
            <Select
              label="Välj teknik"
              key="skills"
              options={skills}
              placeholder="Välj teknik"
              value={query.skill}
              onChange={(value) => setQuery({ ...query, skill: value })}
            />
          </div>
          <div className="w-full lg:w-1/2 flex-none sm:flex-1">
            <input
              id="search"
              className="w-full rounded-md py-1.5 px-4 border-1 border-color-gray-500 text-white bg-input placeholder-white font-mono" 
              type="search"
              aria-label="Sök"
              placeholder="Sök" 
              defaultValue={query.search}
              onChange={(event) =>
                setQuery({ ...query, search: event.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {sortedMentors.map((mentor, i) => (
          <div
            key={i}
            className="bg-custom-800 shadow-md p-6 rounded-lg flex flex-col flex-nowrap items-stretch"
          >
            <img
              className="rounded-full mx-auto mb-3 -mt-1"
              width="80"
              height="80"
              src={mentor.avatar}
            />
            <h2 className="text-lg text-white font-mono font-normal tracking-tight mb-1">
              {mentor.name}
            </h2>
            <p className="leading-relaxed text-base font-light">
              {mentor.description}
            </p>
            <ul className="flex flex-grow flex-wrap content-end mt-2">
              {mentor.skills
                .sort((a, b) => a.localeCompare(b))
                .map((teach, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 mr-2 mt-2 text-xs text-white leading-none bg-indigo-900 rounded-full font-mono tracking-tight"
                  >
                    {teach}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
