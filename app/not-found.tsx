export default function Custom404() {
  return (
    <>
      <h1>Hey! What are you looking at?</h1>
      <h2>Page not found. Nothing to see here...</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="./404.jpg"
        alt="404 image of me as a kid"
        fetchPriority="high"
      />
    </>
  );
}
