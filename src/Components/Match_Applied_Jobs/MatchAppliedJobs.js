import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Latest Job Matches",
    // link: "/latest-jobs",
  },
  {
    id: 2,
    title: "Applied Jobs",
    // link: "/applied-jobs",
  },
];

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-1">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            title={item.title}
            // viewAllLink={item.link}
          />
        ))}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title }) => {
  const isOpen = open === id;

  const latestJobData = [
    {
      id: 1,
      title: "Job Title 1",
      company: "Company 1",
      shipType: "Ship Type 1",
      rank: "Rank 1",
    },
    {
      id: 2,
      title: "Job Title 2",
      company: "Company 2",
      shipType: "Ship Type 2",
      rank: "Rank 2",
    },
    {
      id: 3,
      title: "Job Title 3",
      company: "Company 3",
      shipType: "Ship Type 3",
      rank: "Rank 3",
    },
    {
      id: 2,
      title: "Job Title 2",
      company: "Company 2",
      shipType: "Ship Type 2",
      rank: "Rank 2",
    },
      
   
  ];

  const appliedJobData = [
    {
      id: 5,
      title: "Job Title 5",
      company: "Company 5",
      shipType: "Ship Type 5",
      rank: "Rank 5",
    },
    {
      id: 6,
      title: "Job Title 6",
      company: "Company 6",
      shipType: "Ship Type 6",
      rank: "Rank 6",
    },
    {
      id: 7,
      title: "Job Title 7",
      company: "Company 7",
      shipType: "Ship Type 7",
      rank: "Rank7",
    },
   
    {
      id: 7,
      title: "Job Title 7",
      company: "Company 7",
      shipType: "Ship Type 7",
      rank: "Rank7",
    },  
   
  ];

  const currentData =
    title === "Latest Job Matches" ? latestJobData : appliedJobData;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>

        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full overflow-hidden relative"
          >
         

            <div className="w-full overflow-auto mb-2  items-center h-5/6">
            <div className="flex justify-between py-5  px-5 pb-16">
              <div>
                <p className="text-xl font-bold ">{title}</p>
              </div>
              {/* <div>
                {viewAllLink && (
                  <Link to={viewAllLink}>
                    <button className="border-red-300">View All</button>
                  </Link>
                )}
              </div> */}
              <button>View All</button>
            </div>

  <table className="w-full divide-y divide-gray-400  py-2">
    <thead>
      <tr className="h-6 pb-2">
        <th className="p-1">Title</th>
        <th className="p-1">Company</th>
        <th className="p-1">Ship Type</th>
        <th className="p-1">Rank</th>
      </tr>
    </thead>
    <tbody>
      {currentData.map((item) => (
        <tr key={item.id} className="h-6 text-center">
          <td className="p-3">{item.title}</td>
          <td className="p-3">{item.company}</td>
          <td className="p-3">{item.shipType}</td>
          <td className="p-3">{item.rank}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>





          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;
