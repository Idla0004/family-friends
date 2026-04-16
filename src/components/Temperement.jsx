const Temperement = ({ tempStr }) => {
  /* opdeler temperement string i et array */
  const temperArr = tempStr.split(", ");
  console.log(temperArr);

  /* Et array af farver til at bruge sammen med arrayet af temperement typer */
  const temperColors = [
    "#ACD7FF",
    "#EDA8B3",
    "#C5E59C",
    "#F1E689",
    "#EDC4A8",
    "#EEC6FA",
    "#FFDAF5",
  ];

  return (
    <div className="max-w-fit flex gap-2 flex-wrap">
      {/* Mapper igennem arrayet for temper ud fra index tallet */}
      {temperArr.map((temper, index) => (
        <p
          /* anvender unik nøgle/key til liste elementerne i array'et */
          key={index}
          /* Laver styling udfra det valgte index og relevante index nr på farve arrayet*/
          style={{
            backgroundColor: temperColors[index],
          }}
          className="my-1 py-2 px-3.5 rounded-full text-[#6B8B42] text-xs font-light justify-center"
        >
          {/* Viser et enkelt array objekt per "boks" og gør første bogstav stort, resten af bogstaverne små */}
          {temper.substring(0, 1).toUpperCase() +
            temper.substring(1).toLowerCase()}
        </p>
      ))}
    </div>
  );
};

export default Temperement;
