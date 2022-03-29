export const BlogCodeFallback = ({ props }) => {
  const {
    value: { language, code },
  } = props;

  return (
    <pre className="language-text">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
