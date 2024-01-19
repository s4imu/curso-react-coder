function listGenerate(final = 10) {
  const list = [];
  for (let i = 1; i <= final; i++) {
    list.push(<span>{i},</span>);
  }
  return list;
}

export default function lista() {
  return <div>{listGenerate(12)}</div>;
}
