"use client"
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const DiagnosisHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return <div>No history data available</div>;
  }

  const data = {
    labels: history.map(item => `${item.month} ${item.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: history.map(item => item.blood_pressure.systolic.value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Diastolic',
        data: history.map(item => item.blood_pressure.diastolic.value),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-full p-4 bg-white shadow-lg">
      <h2 className="mb-4 text-lg font-bold">Diagnosis History</h2>
      <Line data={data} options={options} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="text-sm font-medium">Respiratory Rate</h3>
          <p className="text-2xl">{history[0].respiratory_rate.value} bpm</p>
          <p className="text-sm text-gray-500">{history[0].respiratory_rate.levels}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg">
          <h3 className="text-sm font-medium">Temperature</h3>
          <p className="text-2xl">{history[0].temperature.value}°F</p>
          <p className="text-sm text-gray-500">{history[0].temperature.levels}</p>
        </div>
        <div className="p-4 bg-pink-100 rounded-lg">
          <h3 className="text-sm font-medium">Heart Rate</h3>
          <p className="text-2xl">{history[0].heart_rate.value} bpm</p>
          <p className="text-sm text-gray-500">{history[0].heart_rate.levels}</p>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-lg font-bold">Diagnostic List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Problem/Diagnosis
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{item.problem}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{item.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="text-sm leading-5 text-gray-900">{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

DiagnosisHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      blood_pressure: PropTypes.shape({
        systolic: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
        diastolic: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      heart_rate: PropTypes.shape({
        value: PropTypes.number.isRequired,
        levels: PropTypes.string.isRequired,
      }).isRequired,
      respiratory_rate: PropTypes.shape({
        value: PropTypes.number.isRequired,
        levels: PropTypes.string.isRequired,
      }).isRequired,
      temperature: PropTypes.shape({
        value: PropTypes.number.isRequired,
        levels: PropTypes.string.isRequired,
      }).isRequired,
      problem: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

DiagnosisHistory.defaultProps = {
  history: [],
};

const App = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
          }
        });
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        if (data && data[0] && data[0].diagnosis_history) {
          setHistoryData(data[0].diagnosis_history);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {historyData.length > 0 ? (
        <DiagnosisHistory history={historyData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
