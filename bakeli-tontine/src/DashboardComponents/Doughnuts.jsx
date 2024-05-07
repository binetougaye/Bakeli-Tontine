import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";

export function Doughnuts() {
  const data = {
    datasets: [
      {
        label: "Poll",
        data: [49.48, 18, 23.62, 9.04],
        backgroundColor: ["#093545", "#20DF7F", "#FFA8A7", "#FEDEBC"],
        borderColor: ["#093545", "#20DF7F", "#FFA8A7", "#FEDEBC"],
      },
    ],
    labels: ["Terminé", "En cours", "Archivé", "Bloqué"],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom", 
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
          padding: 5,
          maxWidth: 50, 
        },
      },
    },
  };
  
  return (  
    <div className="doughnut-chart ">
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}
