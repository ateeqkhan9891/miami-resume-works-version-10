
"use client";

import { useState } from "react";
import { JOB_SEARCH_TABS } from "./job-search-data";
import JobSearchTabsNav from "./JobSearchTabsNav";
import JobSearchTabContent from "./JobSearchTabContent";
import JobSearchVisualGraphic from "./JobSearchVisualGraphic";

export default function JobSearchSection() {
  const [activeTabId, setActiveTabId] = useState(JOB_SEARCH_TABS[0].id);

  const activeTab =
    JOB_SEARCH_TABS.find((tab) => tab.id === activeTabId) || JOB_SEARCH_TABS[0];

  return (
    <section className="relative overflow-hidden bg-[#0A0D14] py-24 text-slate-100 lg:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One place to run your entire job search
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Most people stitch together three or four tools to apply. Everything you need is unified under one roof.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <JobSearchTabsNav
            tabs={JOB_SEARCH_TABS}
            activeTabId={activeTabId}
            onSelect={setActiveTabId}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <JobSearchTabContent tab={activeTab} />
          </div>

          <div className="lg:col-span-7">
            <JobSearchVisualGraphic activeTabId={activeTab.id} />
          </div>
        </div>
      </div>
    </section>
  );
}