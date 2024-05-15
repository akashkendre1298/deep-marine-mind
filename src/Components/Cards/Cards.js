import React, { useState, useEffect } from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 mt-20">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="Profile" subtitle="Nishant S." href="#" Icon={FiUser} isLoading={isLoading} />
        <Card title="Job Matched" subtitle="20" href="#" Icon={FiMail} isLoading={isLoading} />
        <Card title="Applied Jobs" subtitle="6" href="#" Icon={FiUsers} isLoading={isLoading} />
        <Card title="Total Credit" subtitle="65" href="#" Icon={FiCreditCard} isLoading={isLoading} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href, isLoading }) => {
  return (
    <a
      href={href}
      className={`w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <div className="absolute z-10 -top-12 -right-12">
        {isLoading ? (
          <div className="w-16 h-16 bg-gray-200 rounded-full" />
        ) : (
          <Icon className="text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </div>

      <div className={`mb-2 ${isLoading ? "bg-gray-200" : "text-violet-600 group-hover:text-white"}`}>
        {isLoading ? (
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        ) : (
          <Icon className="text-2xl" />
        )}
      </div>

      <h3 className={`font-medium text-lg ${isLoading ? "bg-gray-200" : "text-slate-950 group-hover:text-white"}`}>
        {isLoading ? <div className="bg-gray-200 h-6 rounded" /> : title}
      </h3>

      <p className={`text-slate-400 ${isLoading ? "bg-gray-200" : "group-hover:text-violet-200"}`}>
        {isLoading ? <div className="bg-gray-200 h-4 w-20 rounded" /> : subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
