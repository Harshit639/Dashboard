import { textAlign } from "@mui/system";
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
  <>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Sodium chloride",
          },
          id: "dots",
        },
        {
          match: {
            id: "Magnesium hydroxide",
          },
          id: "dots",
        },
        {
          match: {
            id: "Water",
          },
          id: "dots",
        },
        {
          match: {
            id: "Brine",
          },
          id: "dots",
        },
        {
          match: {
            id: "Methanol",
          },
          id: "lines",
        },
        {
          match: {
            id: "Alcohal",
          },
          id: "lines",
        },
        {
          match: {
            id: "Actinium",
          },
          id: "lines",
        },
        {
          match: {
            id: "Others",
          },
          id: "lines",
        },
      ]}
      // legends={[
      //   {
      //     anchor: "bottom",
      //     direction: "row",
      //     justify: false,
      //     translateX: 0,
      //     translateY: 56,
      //     itemsSpacing: 0,
      //     itemWidth: 100,
      //     itemHeight: 18,
      //     itemTextColor: "#999",
      //     itemDirection: "left-to-right",
      //     itemOpacity: 1,
      //     symbolSize: 18,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
    <p
      style={{
        marginTop: "-70px",
        textAlign: "center",
        fontSize: "20px",
        marginLeft: "20px",
        color: "black",
        fontWeight: "bold",
      }}
    >
      Available Resources
    </p>
  </>
);

export default MyResponsivePie;
