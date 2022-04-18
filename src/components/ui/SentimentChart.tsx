import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList,
} from "recharts";

function SentimentChart(props: any) {
  const data = [
    {
      name: "Sentiment",
      negative: props.comments[0]["negative"],
      neutral: props.comments[0]["neutral"],
      positive: props.comments[0]["positive"],
    },
  ];
  const renderCustomizedLabel = (props: any) => {
    const { content, ...rest } = props;

    return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
  };
  return (
    <div style={{ width: "60vw" }}>
      <ResponsiveContainer height={50} width={"100%"}>
        <BarChart
          layout="vertical"
          data={data}
          stackOffset="expand"
          margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
        >
          <XAxis hide type="number" />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#FFFFFF"
            fontSize="12"
            tick={false}
            axisLine={false}
          />
          <Tooltip />
          <Bar dataKey="negative" fill="#dd7876" stackId="a">
            <LabelList
              dataKey="negative"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar dataKey="neutral" fill="#76a8dd" stackId="a">
            <LabelList
              dataKey="neutral"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar dataKey="positive" fill="#82ba7f" stackId="a">
            <LabelList
              dataKey="positive"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SentimentChart;
