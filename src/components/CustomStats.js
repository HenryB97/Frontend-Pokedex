
import { Chart as ChartJS, BarElement, CategoryScale,
LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const CustomStats = ({stats}) => {

    let labels = [];
    let values  = [];
    for (let i = 0; i < stats.length; i++) {
        labels = [...labels, stats[i].stat.name];
        values = [...values, stats[i].base_stat]; 
    }

    const data = {
        labels,
        datasets: [
        {
            label: 'Stats',
            data: [...values],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
  };

    return(
        <>
            <Bar width="250" height="250" style = {{backgroundColor:'black'}} data={data} />
        </>
    )
}


