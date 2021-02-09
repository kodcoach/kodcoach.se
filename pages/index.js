import { useState } from 'react';
import { GlobeOutline } from 'heroicons-react';
import Head from '../components/Head';
import Select from '../components/Select';
import Icon from '../components/Icon';
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

const TwitterIcon = () => (
  <svg width="20" height="20" fill="currentColor" class="text-white">
    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
  </svg>
);

const ContactIcon = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'github':
      return <Icon.GitHub />;
    case 'twitter':
      return <Icon.Twitter />;
    default:
      return <Icon.GlobeOutline />;
  }
};

const MentorCard = ({ mentor }) => (
  <div
    key={mentor.slug}
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
    <p className="leading-relaxed text-base font-light">{mentor.description}</p>
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
    <ul className="mt-4 flex flex-grow flex-wrap content-end mt-2">
      {Object.keys(mentor.contact || {}).map((f) => (
        <li key={f} className="mr-2">
          <a href={mentor.contact[f]} className="underline">
            <ContactIcon type={f} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

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
        {sortedMentors.map((mentor) => (
          <MentorCard mentor={mentor} />
        ))}
      </div>
    </>
  );
}
