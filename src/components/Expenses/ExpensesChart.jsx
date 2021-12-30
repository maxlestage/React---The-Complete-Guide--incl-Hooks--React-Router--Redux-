import Chart from "../Chart/Chart";

function ExpensesChart({ expenses }) {
  const chartDataPoints = [
    { label: "Janvier", value: 0 },
    { label: "Fevrier", value: 0 },
    { label: "Mars", value: 0 },
    { label: "Avril", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Juin", value: 0 },
    { label: "Juillet", value: 0 },
    { label: "Aout", value: 0 },
    { label: "Septembre", value: 0 },
    { label: "Octobre", value: 0 },
    { label: "Novembre", value: 0 },
    { label: "Décembre", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // Start at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
