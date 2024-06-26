import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Invoices',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

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