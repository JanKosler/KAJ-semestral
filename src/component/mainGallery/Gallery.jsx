const Gallery = ({ child1, child2, child3, child4, child5, child6 }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            {child1}
            {child2}
            {child3}
          </div>
          <div class="flex flex-wrap w-1/2">
            {child4}
            {child5}
            {child6}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
