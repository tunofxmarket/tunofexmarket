import React, { useEffect, useState } from "react";
import Profile from "../../components/profile/profile";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const API_BASE_URL =
        window.location.origin === "http://localhost:5173"
          ? "http://localhost:3000"
          : "https://alliancefxmarket.onrender.com";

      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/admin/investments/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched plans:", data);

        if (data && Array.isArray(data.plans)) {
          setPlans(data.plans);
        } else {
          setPlans([]);
        }
      } catch (error) {
        console.error("Error fetching investment plans:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <main className="section px-3 md:px-0 md:w-4/5 lg:w-4/5 mx-auto text-white">
      <div className="mainWrapper w-full py-14 px-2 md:px-20">
        <div className="profile">
          <Profile />
        </div>

        <div className="investmentSection">
          <div className="investmentWrapper mt-3">
            <div className="investmentContent">
              <div className="investmentTitle py-10 mb-10">
                <h2 className="text-4xl font-bold">
                  Choose an Investment Plan
                </h2>
              </div>
              {isLoading ? (
                <p className="text-center">Loading investment plans...</p>
              ) : (
                <div className="investmentPlansWrapper gap-5 grid grid-col-1 md:grid-cols-3">
                  {plans.map((plan, id) => (
                    <div className="plan bg-accent rounded-sm" key={id}>
                      <div className="planContent px-5 py-8">
                        <h3 className="text-2xl font-bold text-secondary-light">
                          {plan.planName}
                        </h3>
                        <h5 className="font-bold text-3xl py-1">
                          ${plan.minimumDeposit}
                        </h5>
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="list-none mb-1 text-gray-400"
                          >
                            {feature}
                          </li>
                        ))}
                        <button className="rounded-full border text-lg font-semibold border-secondary-light mt-5 py-3 px-10 hover:border-transparent hover:bg-secondary-light hover:text-accent">
                          Invest Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
