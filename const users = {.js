const users = {
  u001: {
    id: "u001",
    name: "Jeff",
    email: "jeff@jeff.jeff",
    organizationId: "o001"
  },
  u002: {
    id: "u002",
    name: "Joan",
    email: "joan@joan.joan",
    organizationId: "o002"
  }
};
const organizations = {
  o001: { id: "o001", name: "Operations" },
  o002: { id: "o002", name: "Marketing" }
};

function getUserById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users[id]);
    }, 500);
  });
}
function getOrganizationById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(organizations[id]);
    }, 500);
  });
}

async function getObject(id){
  const usersResult = await getUserById(id);
  const organizationsResult = await getOrganizationById(usersResult['organizationId']);
  return new Promise((resolve)=>{
    resolve({
        ...usersResult,
        organization:organizationsResult
    })
  })
}

getObject('u002').then(res => console.log(res));

