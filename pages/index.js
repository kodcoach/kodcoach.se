import Obfuscate from 'react-obfuscate';
import { useState } from 'react';
import { atob } from 'isomorphic-base64';
import { Head, Select, Icon, Link } from '../components';
import { getAllMentors } from '../lib/mentors';
import { flatten, getNiceContactTitle } from '../lib/utils';

export async function getStaticProps() {
  const mentors = getAllMentors();

  return {
    props: {
      mentors,
    },
  };
}

const ContactIcon = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'github':
      return <Icon.GitHub />;
    case 'twitter':
      return <Icon.Twitter />;
    case 'mail':
      return <Icon.Mail />;
    default:
      return <Icon.GlobeOutline />;
  }
};

const MentorCTA = ({ name, contact, cta }) => {
  let text = '';
  let link = '';

  switch (cta) {
    case 'website':
      text = `Kontakta via hemsidan`;
      link = contact[cta];
      break;
    case 'mail':
    case 'twitter':
    case 'github':
      text = getNiceContactTitle(cta, '');
      link = contact[cta];
      break;

    // slack
    default:
      link =
        'https://join.slack.com/t/kodcoach/shared_invite/zt-ng2lrbhu-cuTAKRX~UZMHBG3T31WOCg';
      text = 'Gå med i Slack och kontakta';
      break;
  }

  return cta === 'mail' ? (
    <Obfuscate
      email={atob(contact[cta])}
      aria-label="e-post"
      className="block mt-5 py-2 px-2 rounded transition
        text-center text-sm text-custom-900 font-mono tracking-tight
        bg-green-400 opacity-90 hover:opacity-100
        transform scale-100 hover:scale-105"
    >
      {text}
    </Obfuscate>
  ) : (
    <Link
      target="_blank"
      href={link}
      className="block mt-5 py-2 px-2 rounded transition
        text-center text-sm text-custom-900 font-mono tracking-tight
        bg-green-400 opacity-90 hover:opacity-100
        transform scale-100 hover:scale-105"
    >
      {text}
    </Link>
  );
};

const MentorCard = ({ mentor }) => (
  <div
    className={
      'bg-custom-800 shadow-md rounded-lg flex flex-col flex-nowrap justify-start p-6 ' +
      (mentor.available === false ? 'opacity-70' : '')
    }
  >
    <h2 className="text-lg text-white font-mono font-normal tracking-tight mb-1">
      {mentor.name}
      {mentor.available === false && (
        <small className="block text-xs text-white leading-none font-mono tracking-tight mb-1">
          Ej tillgänglig
        </small>
      )}
    </h2>
    <p className="leading-relaxed text-base font-light">{mentor.description}</p>
    <ul
      className={
        'flex flex-grow flex-wrap items-end mt-2 ' +
        (mentor.available === false ? 'opacity-70' : '')
      }
    >
      {mentor.skills
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((teach, i) => (
          <li
            key={i}
            className="px-2 py-1 mr-2 mt-2 text-xs leading-none bg-custom-600 text-custom-200 rounded-full font-mono tracking-tight"
          >
            {teach}
          </li>
        ))}
    </ul>
    <div className="flex flex-row flex-nowrap items-center order-first">
      {mentor.avatar && (
        <img
          className={
            'rounded-full mr-3 -mt-1 mb-3 ' +
            (mentor.available === false ? 'opacity-60' : '')
          }
          width="80"
          height="80"
          src={mentor.avatar}
        />
      )}
      {mentor.contact && (
        <div>
          <ul className="flex flex-grow flex-wrap content-end text-custom-300 mb-3">
            {Object.keys(mentor.contact || {}).map((f) => (
              <li
                key={f}
                className="p-1"
                title={getNiceContactTitle(f, mentor.name)}
              >
                {f === 'mail' ? (
                  <Obfuscate
                    email={atob(mentor.contact[f])}
                    className="block transition-colors hover:text-green-400 p-1"
                    aria-label="e-post"
                  >
                    <ContactIcon type={f} />
                  </Obfuscate>
                ) : (
                  <Link
                    target="_blank"
                    href={mentor.contact[f]}
                    className="block transition-colors hover:text-green-400 p-1"
                    aria-label={f !== 'website' ? f : 'webbplats'}
                  >
                    <ContactIcon type={f} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <MentorCTA {...mentor} />
  </div>
);

export default function PageIndex({ mentors }) {
  const [query, setQuery] = useState({
    skill: '',
    search: '',
    available: true,
  });

  let sortedMentors = mentors;

  if (query.skill) {
    sortedMentors = sortedMentors.filter(
      (mentor) =>
        !!mentor.skills.find((t) => t.toLowerCase().indexOf(query.skill) !== -1)
    );
  }

  if (query.search) {
    const lowercaseSearch = query.search.toLowerCase();
    sortedMentors = sortedMentors.filter(
      (mentor) =>
        mentor.name.toLowerCase().indexOf(lowercaseSearch) !== -1 ||
        mentor.description.toLowerCase().indexOf(lowercaseSearch) !== -1 ||
        !!mentor.expandedSkills.find(
          (t) => t.toLowerCase().indexOf(lowercaseSearch) !== -1
        )
    );
  }

  sortedMentors = sortedMentors.filter((mentor) =>
    query.available ? mentor.available !== false : mentor
  );

  const skills = Array.from(new Set(flatten(mentors.map((m) => m.skills))))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((t) => ({ value: t.toLowerCase(), label: t }));

  return (
    <>
      <Head title="Kodcoach" url="https://kodcoach.se/" />

      <div className="max-w-screen-sm mx-auto mb-8 sm:my-8 md:my-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold font-mono tracking-tight">
          <span
            className="block mx-auto max-w-sm sm:max-w-md md:max-w-full
            bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500"
          >
            Utvecklare till utvecklare.
          </span>
        </h1>
        <p className="text-center text-lg sm:text-xl font-sans font-light">
          Erfarna utvecklare som gärna delar med sig av sina erfarenheter, sin
          kunskap &amp; ger rådgivning till andra utvecklare som vill växa.
        </p>
      </div>

      <div className="w-full max-w-screen-sm mx-auto mb-8 md:mb-12 font-mono tracking-tight">
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
              className="w-full rounded-md py-1.5 px-4 border-1 border-color-gray-500 text-white bg-custom-800 border-solid border-custom-100 border placeholder-white font-mono tracking-tight"
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
        <div className="space-y-4 sm:space-x-4 sm:space-y-0 text-center">
          <label className="inline-flex items-center mt-4">
            <span className="leading-relaxed text-sm font-mono tracking-tight">
              Visa endast tillgängliga
            </span>
            <input
              className="ml-2 text-purple-600"
              defaultChecked={query.available}
              type="checkbox"
              onChange={(event) =>
                setQuery({
                  ...query,
                  available: event.target.checked ? event.target.checked : '',
                })
              }
            />
          </label>
        </div>
      </div>

      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {sortedMentors.map((mentor) => (
          <MentorCard key={mentor.slug} mentor={mentor} />
        ))}
      </div>
    </>
  );
}
