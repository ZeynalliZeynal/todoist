export const tab_pill_code = `<Tabs className="p-1 rounded-lg justify-center">
  {tabs.map((tab) => (
    <Tab
      isPillActive={activeTab === tab.id}
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className="capitalize data-[pill-active]:text-foreground"
    >
      {tab.label}
    </Tab>
  ))}
</Tabs>`;

export const tab_indicator_code = `<Tabs className="p-1 rounded-lg justify-center">
  {tabs.map((tab) => (
    <Tab
      isPillActive={hovered === tab.id}
      isIndicatorActive={active === tab.id}
      key={tab.id}
      onClick={() => setActive(tab.id)}
      onMouseEnter={() => setHovered(tab.id)}
      onMouseLeave={() => setHovered('')}
      className="capitalize data-[indicator-active]:text-foreground"
    >
      {tab.label}
    </Tab>
  ))}
</Tabs>`;

export const tab_custom_code = `<Tabs className="p-1 rounded-lg justify-center">
  {tabs.map((tab) => (
    <Tab
      isPillActive={hovered === tab.id}
      key={tab.id}
      onMouseEnter={() => setHovered(tab.id)}
      onMouseLeave={() => setHovered('')}
      className={cn(
        'capitalize h-7 rounded-md px-3 text-gray-900 hover:text-foreground [&_[data-active-pill]]:bg-gray-200 [&_[data-active-pill]]:rounded-full'
      )}
    >
      {tab.label}
    </Tab>
  ))}
</Tabs>`;
