import NextHead from 'next/head';

export default function Head({
  title,
  description,
  url,
  image = '',
  keywords = '',
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <link rel="canonical" href={url} />
    </NextHead>
  );
}
