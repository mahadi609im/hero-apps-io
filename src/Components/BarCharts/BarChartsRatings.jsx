import {
  ComposedChart,
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
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={sortedData}
          margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            barSize={30}
            fill="#FF8811"
            barCategoryGap="10%"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartsRatings;
