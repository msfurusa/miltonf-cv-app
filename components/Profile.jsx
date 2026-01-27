export default function Profile({ summary }) {
  return (
    <section>
      <h2>Profile</h2>
      <p className="whitespace-pre-line">{summary}</p>
    </section>
  );
}
