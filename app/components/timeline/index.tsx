export default function Timeline(props: { children: React.ReactNode[] }) {
  const { children } = props;

  return (
    <div className="relative max-w-[1200px] mx-auto timeline">
      {children.map((child, i) => {
        return (
          <div
            key={`{i}-child`}
            className={`container ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">{child}</div>
          </div>
        );
      })}
    </div>
  );
}
