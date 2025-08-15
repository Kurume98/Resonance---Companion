import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const moodColorMap = {
  happy: "#FFD700",
  sad: "#1E90FF",
  calm: "#32CD32",
  angry: "#FF4500",
  neutral: "#A9A9A9"
};

export default function EmotionalArc({ moodHistory }) {
  if (!moodHistory || moodHistory.length === 0) {
    return <p className="arc-placeholder">Emotional arc will appear as you chat...</p>;
  }

  const labels = moodHistory.map((_, index) => `Msg ${index + 1}`);
  const data = {
    labels,
    datasets: [
      {
        label: "Emotional Arc",
        data: moodHistory.map((m) => m.value), // mood value should be a number (e.g., sentiment score)
        borderColor: "#FF69B4",
        backgroundColor: "rgba(255,105,180,0.4)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: moodHistory.map((m) => moodColorMap[m.label] || "#ccc")
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: { min: -1, max: 1, title: { display: true, text: "Sentiment" } }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="emotional-arc">
      <Line data={data} options={options} />
    </div>
  );
}