import NextLink from 'next/link';

const linkPropsKey = [
  'href',
  'as',
  'replace',
  'scroll',
  'passHref',
  'replace',
  'locale',
];

export default function Link({
  children,
  className = 'underline hover:text-green-400',
  ...props
}) {
  const linkProps = linkPropsKey.reduce((prev, cur) => {
    if (props[cur]) {
      prev[cur] = props[cur];
      delete props[cur];
    }
    return prev;
  }, {});

  return (
    <NextLink {...linkProps}>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  );
}
