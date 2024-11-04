import Link from "next/link";

const TransitionLink = (props) => {
  return (
    <div className="relative">
      <Link {...props} />
    </div>
  );
};

export default TransitionLink;
