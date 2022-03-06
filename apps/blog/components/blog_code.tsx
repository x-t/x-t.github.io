import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-php");

export const BlogCode = ({ props }) => {
  const {
    value: { language, code },
  } = props;
  const codeProps = {
    ...defaultProps,
    code,
    language,
  };

  return (
    <Highlight {...codeProps}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {/* ESLint is totally stupid. getXProps(...) returns
              key={} props and it can't pick up on it. */}
          {/* eslint-disable react/jsx-key */}
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          {/* eslint-enable react/jsx-key */}
        </pre>
      )}
    </Highlight>
  );
};
