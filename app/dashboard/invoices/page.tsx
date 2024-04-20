const Page = () => {
  return (
    <main>
      <p>This is invoices page!</p>
    </main>
  );
};

export default Page;

/*

practise mongodb

get all users name kyle
_______________
Users.find({name: "kyle"});
Users.find({name: {$eq: "kyle" }});


get all users not named kyle
______________
Users.find({name: {$ne: "kyle"}});


Get all users with an age greater than 12
_________
Users.find({age:{$gt: 12}});


Get all users with an age greater than or equal to 15
__________
Users.find({age:{$gte:15}});


Get all users with an age less than 12
___________
Users.find({age:{$lt:12}});


Get all users with an age less than or equal to 15
____________
Users.find({age:{$lte:15}});


Get all users with a name of Kyle or Mike
______________
Users.find({name:{$in:["kyle", "mike"]}})


Get all users that do not have the name Kyle or Mike
______________
Users.find({name: {$nin:["kyle", "mike"]}})


Get all users that have an age of 12 and the name Kyle
______________
Users.find($and:[{age: 12}, {name: "kyle"}])
Users.find($and:[{age: {$eq:12}}, {name: {$eq:"kyle"}}])
Users.find({age: 12, name: "kyle"});
Users.find({age: {$eq: 12}, name: {$eq:"kyle"}});


Get all users with a name of Kyle or an age of 12
___________
Users.find({$or: [{name: "kyle"}, {age: 12}]});
Users.find({$or: [{name: {$eq: "kyle"}}, {age: {$eq:12}}]});


Get all users with a name other than Kyle
____________
Users.find({name: {$not:{$eq: "kyle"}}});


Get all users that have a name field
____________
Users.find({name: {$exist:true}});


Get all users that have a balance that is greater than their debt
Users.find({expr:{$gt: ["$balance", "$debt"]}})

*/