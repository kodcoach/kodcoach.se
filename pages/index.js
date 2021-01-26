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
      <p>En dashboard på mentor/studenter?</p>
      <p>{JSON.stringify(mentors[0])}</p>
    </>
  );
}
