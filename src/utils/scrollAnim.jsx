export const observerIntersection = (targetRef) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  if (targetRef.current) {
    observer.observe(targetRef.current);
  }
  return () => {
    observer.disconnect();
  };
};
