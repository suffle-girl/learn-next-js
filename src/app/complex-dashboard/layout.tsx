// the commented variation is also valid, but the parallel routing has more benefits
// import Notifications from './@notifications/page';
// import RevenueMetricts from './@revenue/page';
// import UserAnalytics from './@users/page';

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: '1' }}>{notifications}</div>
      </div>
    </div>
  );
};

export default ComplexDashboardLayout;

// const ComplexDashboardLayout = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div>{children}</div>
//       <Notifications />
//       <RevenueMetricts />
//       <UserAnalytics />
//     </div>
//   );
// };

// export default ComplexDashboardLayout;
