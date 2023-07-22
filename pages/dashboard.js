import { useEffect, useState } from "react";

function Dashboard() {
  const [isloading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isloading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>DASHBOARD</h1>
      <h1>Post={dashboardData.posts}</h1>
      <h1>Likes={dashboardData.likes}</h1>
      <h1>Followers={dashboardData.followers}</h1>
      <h1>Following={dashboardData.following}</h1>
    </div>
  );
}

export default Dashboard;
