// This is a functional component named "CustomImage" that accepts two props: "imgSrc" and "pt".
export default function CustomImage({ imgSrc, pt }) {
  return (
    <>
      {/* This div element has a class name "custom-image" and padding-top style set based on the "pt" prop. */}
      <div className="custom-image" style={{ paddingTop: pt }}>
        {/* Inside the div, an image is rendered with the source specified by the "imgSrc" prop and an alt text of "foodHub". */}
        <img src={imgSrc} alt="foodHub" />
      </div>
    </>
  );
}
