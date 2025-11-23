let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

let Role = emp.details?.profile?.role;
console.log(Role);