export default function Dating({ date }) {
  const publishingDate = new Date(date);
  publishingDate.toLocaleDateString();

  return <small>{publishingDate.toLocaleDateString()}</small>;
}
