import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList,
  Legend,
} from "recharts";
import "./style/SentimentChart.css";

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
    <div className="chartBody">
      <h3>Sentiment Analysis</h3>
      <ResponsiveContainer height={80} width={"100%"}>
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
          <Tooltip wrapperStyle={{ zIndex: 1000 }} />
          <Bar
            isAnimationActive={false}
            dataKey="negative"
            fill="#dd7876"
            stackId="a"
          >
            <LabelList
              dataKey="negative"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar
            isAnimationActive={false}
            dataKey="neutral"
            fill="#76a8dd"
            stackId="a"
          >
            <LabelList
              dataKey="neutral"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar
            isAnimationActive={false}
            dataKey="positive"
            fill="#82ba7f"
            stackId="a"
          >
            <LabelList
              dataKey="positive"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Legend verticalAlign="bottom" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SentimentChart;
