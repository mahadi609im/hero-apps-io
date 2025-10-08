import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarChartsRatings = ({ data }) => {
  const sortedData = data ? [...data].sort((a, b) => b.count - a.count) : [];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={sortedData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" barSize={20} fill="#FF8811" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarChartsRatings;
