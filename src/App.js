import "./App.css";
function App() {
  const Pricing_List = [
    {
      off: "FREE",
      price: "$0",
      user: "✔ Single User",
      storage: "✔ 5GB Storage",
      project: "✔ Unlimited Public Projects",
      community: "✔ Community Access",
      support: "✖ Dedicated Phone Support",
      domain: "✖ Free Subdomain",
      reports: "✖ Monthly Status Reports",
    },
    {
      off: "PLUS",
      price: "$9",
      user: "✔ 5 User",
      storage: "✔ 5GB Storage",
      project: "✔ Unlimited Public Projects",
      community: "✔ Community Access",
      support: "✔ Dedicated Phone Support",
      domain: "✔ Free Subdomain",
      reports: "✖ Monthly Status Reports",
    },
    {
      off: "PRO",
      price: "$49",
      user: "✔ Unlimited User",
      storage: "✔ 150GB Storage",
      project: "✔ Unlimited Public Projects",
      community: "✔ Community Access",
      support: "✔ Dedicated Phone Support",
      domain: "✔ Ultimited Free Subdomain",
      reports: "✔ Monthly Status Reports",
    },
  ];
  return (
    <div
      className="AppFirst"
      elevation={4}
      style={{ borderRadius: "0px", minHeight: "100vh" }}
    >
      <h1>Pricing Table</h1>
      <div className="App">
        {Pricing_List.map(
          ({
            off,
            price,
            user,
            storage,
            project,
            community,
            support,
            domain,
            reports,
          }) => (
            <Pricingtable
              off={off}
              price={price}
              user={user}
              storage={storage}
              project={project}
              community={community}
              support={support}
              domain={domain}
              reports={reports}
            />
          )
        )}
      </div>
    </div>
  );
}

function Pricingtable({
  off,
  price,
  user,
  storage,
  project,
  community,
  support,
  domain,
  reports,
}) {
  return (
    <div className="cardtextcenter">
      <div className="card-header">
        <p>{off}</p>
        {price}
        <sub>/month</sub>
      </div>
      <div className="card-body">
        <div className="align">
          <p>{user}</p>
          <p>{storage}</p>
          <p>{project}</p>
          <p>{community}</p>
          <p>{support}</p>
          <p>{domain}</p>
          <p>{reports}</p>
        </div>
        <div id="button">
          <button className="btn btn-primary" type="submit">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
