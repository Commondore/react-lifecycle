import { useRef, useState } from "react";

const FullPost = () => {
  const [width, setWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  // useEffect(() => {
  //   // unmount
  //   const timeout = setTimeout(() => {
  //     alert("Timeout finish");
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (sectionRef.current?.clientWidth) {
  //     setWidth(sectionRef.current?.clientWidth);
  //   }
  // }, []);

  // useLayoutEffect(() => {
  //   if (sectionRef.current?.clientWidth) {
  //     setWidth(sectionRef.current?.clientWidth);
  //   }
  // }, []);

  return (
    <section ref={sectionRef}>
      <h3>Some text</h3>
      <p>Ширина: {width}</p>
    </section>
  );
};

export default FullPost;
